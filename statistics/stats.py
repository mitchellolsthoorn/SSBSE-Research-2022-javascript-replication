import pandas as pd
import numpy as np

from plots import plt_over_time
from utils import calc_auc
from vargha import VD_A
from scipy.stats import wilcoxon

mode_names = ['none', 'elitist', 'roulette']
# mode_names = ['none', 'ranked', 'proportional']

def execute_per_benchmark(data, func):
    result = []

    for benchmark in set(data['benchmark']):
        res0 = data[data['benchmark'] == benchmark]
        for sub_benchmark in set(res0['sub_benchmark']):
            res1 = res0[res0['sub_benchmark'] == sub_benchmark]
            for subject in set(res1['subject']):
                res2 = res1[res1['subject'] == subject]
                result.extend(func(benchmark, sub_benchmark, subject, res2))

    return result


def calc_mean_std(benchmark, sub_benchmark, subject, data):
    result = []

    expected_len = None

    for dynamic in ['false', 'true']:
        res0 = data[data['dynamic'] == dynamic]
        for mode in mode_names:
            if dynamic == 'true' and mode == 'none':
                continue

            res1 = res0[res0['mode'] == mode]

            if expected_len is None:
                expected_len = len(res1)

            if expected_len != len(res1):
                print(benchmark, sub_benchmark, subject, dynamic, mode)
                # continue
                raise Exception(f'Non equal number of trials {expected_len} != {len(res1)}')

            mean = res1['coverage'].mean()
            std = res1['coverage'].std()

            result.append([benchmark, sub_benchmark, subject, dynamic, mode, mean, std])

    return result

def calc_median_iqr(benchmark, sub_benchmark, subject, data):
    result = []

    expected_len = None

    for dynamic in ['false', 'true']:
        res0 = data[data['dynamic'] == dynamic]
        for mode in mode_names:
            if dynamic == 'true' and mode == 'none':
                continue

            res1 = res0[res0['mode'] == mode]

            if expected_len is None:
                expected_len = len(res1)

            if expected_len != len(res1):
                raise Exception(f'Non equal number of trials {expected_len} != {len(res1)}')

            median = res1['coverage'].median()
            q1 = res1['coverage'].quantile(0.25)
            q3 = res1['coverage'].quantile(0.75)
            iqr = q3 - q1

            result.append([benchmark, sub_benchmark, subject, dynamic, mode, median, iqr])

    return result


def calc_difference_significance(benchmark, sub_benchmark, subject, data):
    result = []

    for base_dynamic in set(data['dynamic']):
        base_res0 = data[data['dynamic'] == base_dynamic]
        for base_mode in set(base_res0['mode']):
            base_res1 = base_res0[base_res0['mode'] == base_mode]

            baseline = np.sort(base_res1['coverage'])

            for dynamic in set(data['dynamic']):
                res0 = data[data['dynamic'] == dynamic]
                for mode in set(res0['mode']):
                    res1 = res0[res0['mode'] == mode]

                    cure = np.sort(res1['coverage'])
                    # print(benchmark, sub_benchmark, subject)
                    # print(base_dynamic, base_mode, dynamic, mode)
                    # print(baseline)
                    # print(cure)

                    if len(baseline) != len(cure):
                        raise Exception(f'Non equal number of trials {len(baseline)} != {len(cure)}')

                    if np.array_equal(baseline, cure):
                        result.append([benchmark, sub_benchmark, subject, base_dynamic, base_mode, dynamic, mode, 1, 0.5, 'negligible'])
                        # print(dynamic, mode, 1, 0.5, 'negligible')
                        continue

                    # if len(baseline) != 20:
                    #     raise Exception(f'Expected 20 trials')

                    wilco = wilcoxon(baseline, cure)
                    vargha = VD_A([float(x) for x in cure], [float(x) for x in baseline])

                    result.append([benchmark, sub_benchmark, subject, base_dynamic, base_mode, dynamic, mode, wilco[1], vargha[0], vargha[1]])

                    # print(dynamic, mode, wilco[1], vargha[0], vargha[1])

    return result


def calc_aucs(benchmark, sub_benchmark, subject, data):
    result = []

    for dynamic in ['false', 'true']:
        res0 = data[data['dynamic'] == dynamic]
        for mode in mode_names:
            if dynamic == 'true' and mode == 'none':
                continue

            res1 = res0[res0['mode'] == mode]

            for trial in set(res1['trial']):
                res2 = res1[res1['trial'] == trial]

                auc = calc_auc(res2)# / len(res2)

                result.append([benchmark, sub_benchmark, subject, dynamic, mode, trial, auc])

    return result


def calc_scores(columns, medians, sign_columns, significance, comparer, comparee):
    medians = pd.DataFrame(medians, columns=columns)
    significance = pd.DataFrame(significance, columns=sign_columns)

    wins = 0
    significant_wins = 0
    losses = 0
    significant_losses = 0
    ties = 0

    for benchmark in set(medians['benchmark']):
        res0 = medians[medians['benchmark'] == benchmark]
        res0_s = significance[significance['benchmark'] == benchmark]

        # if 'moment' not in benchmark:
        #     continue

        for sub_benchmark in set(res0['sub_benchmark']):
            res1 = res0[res0['sub_benchmark'] == sub_benchmark]
            res1_s = res0_s[res0_s['sub_benchmark'] == sub_benchmark]
            for subject in set(res1['subject']):
                res2 = res1[res1['subject'] == subject]
                res2_s = res1_s[res1_s['subject'] == subject]

                mean_comparer = res2[res2['dynamic'] == comparer[0]][res2['mode'] == comparer[1]]['mean'].iloc[0]
                mean_comparee = res2[res2['dynamic'] == comparee[0]][res2['mode'] == comparee[1]]['mean'].iloc[0]

                std_comparer = res2[res2['dynamic'] == comparer[0]][res2['mode'] == comparer[1]]['std'].iloc[0]
                std_comparee = res2[res2['dynamic'] == comparee[0]][res2['mode'] == comparee[1]]['std'].iloc[0]

                # print(res2_s[res2_s['dynamic'] == comparer[0]])
                # print(res2_s[res2_s['dynamic'] == comparer[0]][res2_s['mode'] == comparer[1]])
                # print(res2_s[res2_s['dynamic'] == comparer[0]][res2_s['mode'] == comparer[1]][res2_s['base_dynamic'] == comparee[0]])
                # print(res2_s[res2_s['dynamic'] == comparer[0]][res2_s['mode'] == comparer[1]][res2_s['base_dynamic'] == comparee[0]][res2_s['base_mode'] == comparee[1]])

                p_value = res2_s[res2_s['dynamic'] == comparer[0]][res2_s['mode'] == comparer[1]][res2_s['base_dynamic'] == comparee[0]][res2_s['base_mode'] == comparee[1]]['p'].iloc[0]
                other_p_value = res2_s[res2_s['dynamic'] == comparee[0]][res2_s['mode'] == comparee[1]][res2_s['base_dynamic'] == comparer[0]][res2_s['base_mode'] == comparer[1]]['p'].iloc[0]

                # if p_value != other_p_value:
                #     print(comparer, comparee)
                #     print(benchmark, sub_benchmark, subject)
                #     print(mean_comparer)
                #     print(mean_comparee)
                #     print(std_comparer)
                #     print(std_comparee)
                #     print(p_value)
                #     print(other_p_value)
                #     print()
                #     raise Exception(f"non matching p values {p_value} {other_p_value}")

                if mean_comparer > mean_comparee:
                    wins += 1
                    if p_value < 0.05:
                        significant_wins += 1
                elif mean_comparer < mean_comparee:
                    losses += 1
                    if p_value < 0.05:
                        significant_losses += 1
                elif mean_comparer == mean_comparee:
                    ties += 1
                else:
                    raise Exception("impossible")


    print(comparer, 'vs', comparee)
    print('wins', wins, 'of which significant', significant_wins)
    print('ties', ties)
    print('losses', losses, 'of which significant', significant_losses)




def calc_timings(data):
    result = []


    for benchmark in set(data['benchmark']):
        res0 = data[data['benchmark'] == benchmark]
        res1 = res0[res0['dynamic'] == 'false']
        res2 = res1[res1['mode'] == 'ranked']

        print(benchmark, len(res2))

        mean = res2['type_resolving_time'].mean()
        std = res2['type_resolving_time'].std()

        result.append([benchmark, mean, std])

    return result