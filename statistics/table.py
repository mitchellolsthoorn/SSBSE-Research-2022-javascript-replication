import pandas as pd

from stats import execute_per_benchmark, mode_names


def create_mean_tables(columns, formats, data):
    adjustment = 30

    df = pd.DataFrame(data, columns=columns)

    def format_(benchmark, folder, subject, data_):
        line = [benchmark.replace('javascript_algorithms_', 'js algorithms '), subject]

        first = True

        best = -1
        best_mode = []
        count = 2

        for mode in mode_names:
            res0 = data_[data_['mode'] == mode]
            for dynamic in ['false', 'true']:
                if dynamic == 'true' and mode == 'none':
                    continue
                # if mode == 'elitist':
                #     continue
                res1 = res0[res0['dynamic'] == dynamic]

                mean_ = float(res1['mean'])

                if best < mean_:
                    best = mean_
                    best_mode = [count]
                elif best == mean_:
                    best_mode.append(count)

                count = count + 2

                if not first:
                    line.append('\multicolumn{1}{|l}{' + formats["mean"].format(mean_) + '}')
                else:
                    first = False
                    line.append(formats['mean'].format(mean_))
                line.append(formats['std'].format(float(res1['std'])))

        for i in best_mode:
            if 'multi' in line[i]:
                line[i] = '\multicolumn{1}{|l}{\cellcolor{Gray}' + formats["mean"].format(best) + '}'
            else:
                line[i] = '\cellcolor{Gray}' + line[i]

        return [" & ".join([str(x).ljust(adjustment, " ") for x in line]) + ' \\\\ ']

    total = execute_per_benchmark(df, format_)
    total = sorted(total)
    for line in total:
        print(line)


def create_significance_tables(columns, formats, data):
    adjustment = 30

    df = pd.DataFrame(data, columns=columns)

    def format_(benchmark, folder, subject, data_):
        line = [benchmark.replace('javascript_algorithms_', 'js algorithms '), subject]

        # none vs roulette
        # sa vs sa
        res = data_[data_['dynamic'] == 'false'][data_['base_dynamic'] == 'false']
        none_vs_elitist = res[res['base_mode'] == 'none'][res['mode'] == 'roulette']
        if float(none_vs_elitist['p']) <= 0.05:
            line.append('\cellcolor{Gray}' + formats['p'].format(float(none_vs_elitist['p'])))
        else:
            line.append(formats['p'].format(float(none_vs_elitist['p'])))
        line.append(formats['a'].format(float(none_vs_elitist['a'])) + f' ({str(none_vs_elitist["as"].iloc[0])})')

        # none vs roulette
        # sa vs sa + IEI
        res = data_[data_['dynamic'] == 'true'][data_['base_dynamic'] == 'false']
        none_vs_roulette = res[res['base_mode'] == 'none'][res['mode'] == 'roulette']
        if float(none_vs_roulette['p']) <= 0.05:
            line.append('\multicolumn{1}{|l}{\cellcolor{Gray}' + formats['p'].format(float(none_vs_roulette['p'])) + '}')
        else:
            line.append('\multicolumn{1}{|l}{' + formats['p'].format(float(none_vs_roulette['p'])) + '}')
        line.append(formats['a'].format(float(none_vs_roulette['a'])) + f' ({str(none_vs_roulette["as"].iloc[0])})')

        # roulette vs roulette
        # sa vs sa + IEI
        res = data_[data_['dynamic'] == 'true'][data_['base_dynamic'] == 'false']
        none_vs_roulette = res[res['base_mode'] == 'roulette'][res['mode'] == 'roulette']
        if float(none_vs_roulette['p']) <= 0.05:
            line.append('\multicolumn{1}{|l}{\cellcolor{Gray}' + formats['p'].format(float(none_vs_roulette['p'])) + '}')
        else:
            line.append('\multicolumn{1}{|l}{' + formats['p'].format(float(none_vs_roulette['p'])) + '}')
        line.append(formats['a'].format(float(none_vs_roulette['a'])) + f' ({str(none_vs_roulette["as"].iloc[0])})')


        # # elitist vs roulette
        # res = data_[data_['dynamic'] == 'true'][data_['base_dynamic'] == 'true']
        # elitist_vs_roulette = res[res['base_mode'] == 'elitist'][res['mode'] == 'roulette']
        # if float(elitist_vs_roulette['p']) <= 0.05:
        #     line.append('\multicolumn{1}{|l}{\cellcolor{Gray}' + formats['p'].format(float(elitist_vs_roulette['p'])) + '}')
        # else:
        #     line.append('\multicolumn{1}{|l}{' + formats['p'].format(float(elitist_vs_roulette['p'])) + '}')
        # line.append(formats['a'].format(float(elitist_vs_roulette['a'])) + f' ({str(elitist_vs_roulette["as"].iloc[0])})')

        return [" & ".join([str(x).ljust(adjustment, " ") for x in line]) + ' \\\\ ']


    print(f'TABLE dynamic = false')
    total = execute_per_benchmark(df, format_)
    total = sorted(total)
    for line in total:
        print(line)


def create_significance_table_specific_mode(columns, formats, data, mode):
    adjustment = 30

    df = pd.DataFrame(data, columns=columns)
    print(df)

    def format_(benchmark, folder, subject, data_):
        line = [benchmark.replace('javascript_algorithms_', 'js algorithms '), subject]

        # SA vs SA + DA
        none_vs_elitist = data_[data_['base_dynamic'] == 'false'][data_['dynamic'] == 'true']
        if float(none_vs_elitist['p']) <= 0.05:
            line.append('\cellcolor{Gray}' + formats['p'].format(float(none_vs_elitist['p'])))
        else:
            line.append(formats['p'].format(float(none_vs_elitist['p'])))
        line.append(formats['a'].format(float(none_vs_elitist['a'])) + f' ({str(none_vs_elitist["as"].iloc[0])})')

        return [" & ".join([str(x).ljust(adjustment, " ") for x in line]) + ' \\\\ ']

    res = df[df['mode'] == mode][df['base_mode'] == mode]
    print(f'TABLE mode = {mode}')
    total = execute_per_benchmark(res, format_)
    total = sorted(total)
    for line in total:
        print(line)



def create_table(columns, formats, data):
    adjustment = 30
    header = " & ".join([str(x).ljust(adjustment, " ") for x in columns]) + ' \\\\ \\hline '

    print(header)

    for row in data:
        line = []
        for i, column in enumerate(columns):
            value = row[i]

            if column in formats and value != '-':
                format_ = formats[column]
                value = format_.format(value)

            value = str(value)

            line.append(value.ljust(adjustment, " "))

        print(" & ".join(line) + ' \\\\ \\hline ')
