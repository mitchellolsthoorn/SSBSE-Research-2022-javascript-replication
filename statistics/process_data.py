import pandas as pd

def quantize_over_time_data(cov_over_time: pd.DataFrame):
    quantized = []

    for experiment_name in set(cov_over_time['experiment']):
        res = cov_over_time[cov_over_time['experiment'] == experiment_name]

        for total_time in set(res['total_time']):
            res1 = res[res['total_time'] == total_time]

            for benchmark in set(res1['benchmark']):
                res2 = res1[res1['benchmark'] == benchmark]

                for sub_benchmark in set(res2['sub_benchmark']):
                    res3 = res2[res2['sub_benchmark'] == sub_benchmark]

                    for dynamic in set(res3['dynamic']):
                        res4 = res3[res3['dynamic'] == dynamic]

                        for mode in set(res4['mode']):
                            res5 = res4[res4['mode'] == mode]

                            for subject in set(res5['subject']):
                                res6 = res5[res5['subject'] == subject]

                                for trial in set(res6['trial']):
                                    res7 = res6[res6['trial'] == trial]
                                    res7 = res7.reset_index()
                                    indices = res7.index[res7['time'] == 0].tolist()

                                    for i in range(len(indices)):
                                        next_ = indices[i + 1] if i < len(indices) - 1 else res7.last_valid_index() + 1

                                        select_index = [x for x in range(indices[i], next_)]
                                        res8 = res7.iloc[select_index]
                                        res8 = res8.sort_values('time').reset_index()

                                        ri = 0

                                        for time in range(0, int(total_time)):
                                            # print(len(res), ri)
                                            if len(res8) - 1 > ri and time >= res8.iloc[ri]['time']:
                                                ri += 1

                                            coverage = res8.iloc[ri]['coverage']
                                            quantized.append(
                                                [experiment_name, total_time, benchmark, sub_benchmark, dynamic, mode, trial, time, subject + str(i),
                                                 coverage])

    return pd.DataFrame(quantized,
                        columns=['experiment', 'total_time', 'benchmark', 'sub_benchmark', 'dynamic', 'mode', 'trial', 'time', 'subject',
                                 'coverage'])
