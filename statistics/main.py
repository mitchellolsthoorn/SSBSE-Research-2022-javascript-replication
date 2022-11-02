import os

import pandas as pd

from extract_results import Extractor
from plots import plot_all, plt_over_time

from process_data import quantize_over_time_data
from stats import execute_per_benchmark, calc_difference_significance, calc_mean_std, \
    calc_median_iqr, calc_aucs, calc_scores, calc_timings
from table import create_table, create_mean_tables, create_significance_tables, create_significance_table_specific_mode



def main():
    base_dir = '/home/dimitri/Documents/git/university/syntest/syntest-javascript/experiments/results' #/results2 results60sec3/
    # base_dir = '/home/dimitri/Documents/git/university/syntest/results/results' #/results2 results60sec3/
    experiment_selection = ['final']
    # experiment_selection = ['new']

    time = 120

    extractor = Extractor(base_dir, time)

    experiments = extractor.get_experiments(experiment_selection)

    # final_cov = extractor.get_final_cov(experiments)
    # means = execute_per_benchmark(final_cov, calc_mean_std)
    # medians = execute_per_benchmark(final_cov, calc_median_iqr)
    #
    # significance = execute_per_benchmark(final_cov, calc_difference_significance)
    #
    # columns = ['benchmark', 'sub_benchmark', 'subject', 'dynamic', 'mode', 'mean', 'std']
    # formats = {
    #     'mean': '{:.2f}',
    #     'std': '{:.3f}'
    # }
    #
    #
    # # create_mean_tables(columns, formats, means)
    # create_mean_tables(columns, formats, medians)
    #
    # sign_columns = ['benchmark', 'sub_benchmark', 'subject', 'base_dynamic', 'base_mode', 'dynamic', 'mode', 'p', 'a', 'as']
    # formats = {
    #     'p': '{:.2f}',
    #     'a': '{:.3f}'
    # }
    #
    # # calc_scores(columns, medians, sign_columns, significance, ('false', 'elitist'), ('false', 'none'))
    # calc_scores(columns, medians, sign_columns, significance, ('false', 'roulette'), ('false', 'none'))
    # # calc_scores(columns, medians, sign_columns, significance, ('false', 'roulette'), ('false', 'elitist'))
    #
    #
    # # calc_scores(columns, medians, sign_columns, significance, ('true', 'elitist'), ('false', 'none'))
    # calc_scores(columns, medians, sign_columns, significance, ('true', 'roulette'), ('false', 'none'))
    # # calc_scores(columns, medians, sign_columns, significance, ('true', 'roulette'), ('true', 'elitist'))
    #
    # # calc_scores(columns, medians, sign_columns, significance, ('true', 'elitist'), ('false', 'elitist'))
    # # calc_scores(columns, medians, sign_columns, significance, ('true', 'roulette'), ('false', 'roulette'))
    # #
    # # calc_scores(columns, medians, sign_columns, significance, ('true', 'roulette'), ('false', 'elitist'))
    # calc_scores(columns, medians, sign_columns, significance, ('true', 'roulette'), ('false', 'roulette'))
    # # calc_scores(columns, medians, sign_columns, significance, ('true', 'roulette'), ('true', 'elitist'))
    #
    # create_significance_tables(sign_columns, formats, significance)
    # # create_significance_table_specific_mode(sign_columns, formats, significance, 'elitist')
    # # create_significance_table_specific_mode(sign_columns, formats, significance, 'roulette')
    # #
    # # timings = calc_timings(final_cov)
    # # print(timings)


    cov_over_time = extractor.get_cov_over_time(experiments)
    print('done reading data')

    cov_over_time = quantize_over_time_data(cov_over_time)
    print('done quantizing data')
    plot_all(cov_over_time, plt_over_time)
    print('done plotting data')

    aucs = execute_per_benchmark(cov_over_time, calc_aucs)
    aucs = pd.DataFrame(aucs, columns=['benchmark', 'sub_benchmark', 'subject', 'dynamic', 'mode', 'trial', 'coverage'])
    auc_means = execute_per_benchmark(aucs, calc_mean_std)
    auc_medians = execute_per_benchmark(aucs, calc_median_iqr)

    columns = ['benchmark', 'sub_benchmark', 'subject', 'dynamic', 'mode', 'mean', 'std']
    formats = {
        'mean': '{:.2f}',
        'std': '{:.3f}'
    }

    # create_mean_tables(columns, formats, auc_means)
    create_mean_tables(columns, formats, auc_medians)

    sign_columns = ['benchmark', 'sub_benchmark', 'subject', 'base_dynamic', 'base_mode', 'dynamic', 'mode', 'p', 'a', 'as']
    formats = {
        'p': '{:.3f}',
        'a': '{:.3f}'
    }

    auc_significance = execute_per_benchmark(aucs, calc_difference_significance)

    create_significance_tables(sign_columns, formats, auc_significance)

    create_significance_table_specific_mode(sign_columns, formats, auc_significance, 'elitist')
    create_significance_table_specific_mode(sign_columns, formats, auc_significance, 'roulette')

    # calc_scores(columns, auc_medians, sign_columns, auc_significance, ('false', 'elitist'), ('false', 'none'))
    # calc_scores(columns, auc_medians, sign_columns, auc_significance, ('true', 'elitist'), ('false', 'none'))
    # calc_scores(columns, auc_medians, sign_columns, auc_significance, ('false', 'roulette'), ('false', 'none'))
    # calc_scores(columns, auc_medians, sign_columns, auc_significance, ('true', 'roulette'), ('false', 'none'))
    #
    # calc_scores(columns, auc_medians, sign_columns, auc_significance, ('true', 'roulette'), ('false', 'roulette'))
    # calc_scores(columns, auc_medians, sign_columns, auc_significance, ('true', 'elitist'), ('false', 'elitist'))



if __name__ == '__main__':
    main()
