from pprint import pprint

import pandas as pd
import os

class Extractor:
    def __init__(self, base_dir, time):
        self.base_dir = base_dir
        self.time = time

    def get_experiments(self, experiment_selection):
        original_dir = os.curdir
        os.chdir(self.base_dir)

        folders = os.listdir()

        experiments = []

        map_ = {}

        for folder in folders:
            if folder == '.gitkeep':
                continue

            parts = folder.split('-')

            experiment_name = parts[0]

            if experiment_name not in experiment_selection:
                continue

            # print(parts)
            # exit()

            if parts[2] == 'incorporate':
                continue

            time = int(parts[1])
            dynamic = parts[2]
            mode = parts[3]
            benchmark = parts[4]

            # if 'javascript' in benchmark:
            #     benchmark = 'javascript_algorithms'

            sub_benchmark = int(parts[5])
            trial = int(parts[6])

            if time != self.time:
                continue

            # if "moment" in benchmark:
            #     continue
            # if len(parts) == 7:
            #     benchmark = parts[4]
            #     sub_benchmark = int(parts[5])
            #     trial = int(parts[6])
            # else:
            #     benchmark = parts[4] + '-' + parts[5]
            #     sub_benchmark = int(parts[6])
            #     trial = int(parts[7])

            #
            # if not os.path.exists(f"{self.base_dir}/{folder}/statistics/statistics.csv")\
            #         and not os.path.exists(f"{self.base_dir}/{folder}/syntest/statistics/statistics.csv"):
            #     continue

            if benchmark not in map_:
                map_[benchmark] = {}

            if sub_benchmark not in map_[benchmark]:
                map_[benchmark][sub_benchmark] = {}

            # if sub_benchmark == 9:
            #     continue

            if dynamic not in map_[benchmark][sub_benchmark]:
                map_[benchmark][sub_benchmark][dynamic] = {}

            if mode not in map_[benchmark][sub_benchmark][dynamic]:
                map_[benchmark][sub_benchmark][dynamic][mode] = 0

            map_[benchmark][sub_benchmark][dynamic][mode] += 1

            # if map_[benchmark][sub_benchmark][dynamic][mode] > 9:
            #     continue

            if os.path.exists(f"{self.base_dir}/{folder}/syntest/statistics/statistics.csv"):
                experiments.append([folder + '/syntest', experiment_name, time, benchmark, sub_benchmark, dynamic, mode, trial])
            elif os.path.exists(f"{self.base_dir}/{folder}/statistics/statistics.csv"):
                experiments.append([folder, experiment_name, time, benchmark, sub_benchmark, dynamic, mode, trial])
            else:
                map_[benchmark][sub_benchmark][dynamic][mode] -= 1

        os.chdir(original_dir)

        pprint(map_)
        # exit()
        return experiments

    def get_final_cov(self, experiments):
        original_dir = os.curdir
        os.chdir(self.base_dir)

        data = []

        for experiment in experiments:
            folder = experiment[0]
            experiment_name = experiment[1]
            time = experiment[2]
            benchmark = experiment[3]
            sub_benchmark = experiment[4]
            dynamic = experiment[5]
            mode = experiment[6]
            trial = experiment[7]

            if not os.path.exists(f"{self.base_dir}/{folder}/statistics/statistics.csv"):
                df = pd.read_csv(f"{self.base_dir}/{folder}/syntest/statistics/statistics.csv")#, skiprows=range(1, 6))
            else:
                df = pd.read_csv(f"{self.base_dir}/{folder}/statistics/statistics.csv")#, skiprows=range(1, 6))
            # df = df.sum()

            last_subject = ''
            for index, row in df.iterrows():
                subject = row['SUBJECT']

                if 'layer.js' in subject \
                        or 'route.js' in subject\
                        or 'detectUndirectedCycleUsingDisjointSet.js' in subject \
                        or 'topologicalSort.js' in subject \
                        or 'KnapsackItem.js' in subject \
                        or 'init.js' in subject \
                        or 'parsing-flags.js' in subject\
                        or 'to-type.js' in subject\
                        or 'to.js' in subject\
                        or 'now.js' in subject\
                        or 'from.js' in subject:
                    continue
                if row['TOTAL_BRANCHES'] == 0:
                    print(experiment_name, time, benchmark, sub_benchmark, subject, dynamic, mode, trial, row['COVERED_BRANCHES'], row['TOTAL_BRANCHES'])
                    continue

                new_data = [experiment_name, time, benchmark, sub_benchmark, subject, dynamic, mode, trial, row['COVERED_BRANCHES'], row['TOTAL_BRANCHES'], row['COVERED_BRANCHES'] / row['TOTAL_BRANCHES'], row['EVALUATIONS']]#, row['TYPE_RESOLVING_TIME']]

                if last_subject == subject:
                    data[len(data) - 1] = new_data
                else:
                    data.append(new_data)

                last_subject = subject

        os.chdir(original_dir)
        return pd.DataFrame(data, columns=['experiment', 'total_time', 'benchmark', 'sub_benchmark', 'subject', 'dynamic', 'mode', 'trial', 'branches', 'total', 'coverage', 'evaluations'])#, 'type_resolving_time'])


    def get_cov_over_time(self, experiments):
        original_dir = os.curdir
        os.chdir(self.base_dir)

        over_time_data = []

        for experiment in experiments:
            folder = experiment[0]
            experiment_name = experiment[1]
            time = experiment[2]
            benchmark = experiment[3]
            sub_benchmark = experiment[4]
            dynamic = experiment[5]
            mode = experiment[6]
            trial = experiment[7]

            if not os.path.exists(f"{self.base_dir}/{folder}/statistics/coverage.csv"):
                df = pd.read_csv(f"{self.base_dir}/{folder}/syntest/statistics/coverage.csv")#, skiprows=range(1, 6))
            else:
                df = pd.read_csv(f"{self.base_dir}/{folder}/statistics/coverage.csv")#, skiprows=range(1, 6))
            # df = pd.read_csv(f"{self.base_dir}/{folder}/statistics/coverage.csv")#, skiprows=range(1, 799))

            df = df[df['SUBJECT'].isin([
                    'query.js'
                ])]

            for x, row in df.iterrows():
                subject = row['SUBJECT']


                if 'layer.js' in subject \
                        or 'route.js' in subject\
                        or 'detectUndirectedCycleUsingDisjointSet.js' in subject \
                        or 'topologicalSort.js' in subject \
                        or 'KnapsackItem.js' in subject \
                        or 'init.js' in subject \
                        or 'parsing-flags.js' in subject\
                        or 'to-type.js' in subject\
                        or 'to.js' in subject\
                        or 'now.js' in subject\
                        or 'from.js' in subject:
                    continue

                cov_branch = row['COVERED_BRANCHES']
                total_branch = row['TOTAL_BRANCHES']

                coverage = cov_branch / total_branch if total_branch != 0 else 0

                over_time_data.append([experiment_name, time, benchmark, sub_benchmark, dynamic, mode, trial, row['TIME'], row['SUBJECT'], coverage])

        os.chdir(original_dir)
        return pd.DataFrame(over_time_data, columns=['experiment', 'total_time', 'benchmark', 'sub_benchmark', 'dynamic', 'mode', 'trial', 'time', 'subject', 'coverage'])
