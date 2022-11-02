
import pandas


# expects sorted quantized over time data of a single benchmark
def calc_auc(cov_over_time: pandas.DataFrame):
    return cov_over_time['coverage'].sum()


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