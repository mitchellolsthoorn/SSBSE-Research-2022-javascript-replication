import matplotlib.pyplot as plt
import pandas as pd
import plotnine as p9


def plot_all(data, func):
    for benchmark in set(data['benchmark']):
        res0 = data[data['benchmark'] == benchmark]
        for sub_benchmark in set(res0['sub_benchmark']):
            res1 = res0[res0['sub_benchmark'] == sub_benchmark]
            for subject in set(res1['subject']):
                res2 = res1[res1['subject'] == subject]
                func(benchmark, sub_benchmark, subject, res2)


def plt_over_time(benchmark, sub_benchmark, subject, df):
    df2 = df.groupby(['dynamic', 'mode', 'time'], as_index=False)['time', 'coverage'].agg({'coverage': ['mean', 'std']})
    df2.columns = ['dynamic', 'mode', 'time', 'mean', 'std']
    df2.reindex(columns=sorted(df2.columns))


    df2.loc[(df2['dynamic'] == 'false') & (df2['mode'] == 'none'), 'dynamic'] = 'none'
    df2.loc[(df2['dynamic'] == 'false') & (df2['mode'] == 'elitist'), 'dynamic'] = 'rank-based: SA'
    df2.loc[(df2['dynamic'] == 'false') & (df2['mode'] == 'roulette'), 'dynamic'] = 'proportional: SA'
    df2.loc[(df2['dynamic'] == 'true') & (df2['mode'] == 'elitist'), 'dynamic'] = 'rank-based: SA + IEI'
    df2.loc[(df2['dynamic'] == 'true') & (df2['mode'] == 'roulette'), 'dynamic'] = 'proportional: SA + IEI'

    df2.columns = ['Mode', 'mode', 'time', 'mean', 'std']

    df2['Mode'] = pd.Categorical(df2['Mode'], categories=['none', 'rank-based: SA', 'proportional: SA', 'rank-based: SA + IEI', 'proportional: SA + IEI'], ordered=True)
    df2 = df2.sort_values('Mode', ascending=True)

    # df2[df2['dynamic'] == 'true']['dynamic'] = 'SA + DA'

    # print(df2)

    h = (p9.ggplot(data=df2, mapping=p9.aes(x='time', y='mean'))
         + p9.scale_linetype_manual(values={
                "none": (0, (1, 1)),
                "rank-based: SA": (1, (2, 2)),
                'proportional: SA': (2, (3, 3)),
                'rank-based: SA + IEI': (3, (4, 4)),
                'proportional: SA + IEI': (4, (5, 5))
            })
         + p9.scale_color_discrete()
         + p9.scale_fill_discrete()
         + p9.geom_line(mapping=p9.aes(linetype='Mode', color='Mode'), size=1.5)
         # + p9.geom_ribbon(mapping=p9.aes(ymin='mean-std', ymax='mean+std', fill='Mode', linetype='Mode', color='Mode'), alpha=0.1)
         + p9.xlab('')
         + p9.ylab('Branch Coverage (%)')
         # + p9.theme_gray()
         + p9.theme(figure_size=(16, 8),subplots_adjust={'right': 0.5})
         # + p9.theme_void()
         # + p9.theme
         + p9.theme(legend_key_size=25, legend_title=p9.element_text(size=25), legend_text=p9.element_text(size=25))
         # + p9.theme(legend_position='none')
         )


    # print(h[1])
    h.draw(show=True)
    h.save('legend.pgf')
    subject = subject.replace('.', '')
    # h.save(f'./figs/{benchmark}_{sub_benchmark}_{subject}.pgf')
    # exit()
    #

    # for dynamic in ['false', 'true']:
    #     res0 = df[df['dynamic'] == dynamic]
    #     for mode in ['none', 'elitist', 'roulette']:
    #         if dynamic == 'true' and mode == 'none':
    #             continue
    #         res1 = res0[res0['mode'] == mode]
    #
    #         data = res1.groupby(['time'])['time', 'coverage'].mean()
    #         std_data = res1.groupby(['time'])['time', 'coverage'].std()
    #
    #         x = data['time']
    #         y = data['coverage']
    #         std = std_data['coverage']
    #
    #         p = plt.plot(x, y, label=mode)
    #         color = p[0].get_color()
    #         plt.fill_between(x, y, y + std, color=color, alpha=0.2)
    #         plt.fill_between(x, y, y - std, color=color, alpha=0.2)
    #
    # # plt.tight_layout()\
    #
    # plt.savefig(f'{benchmark}_{sub_benchmark}_{subject}.png')
    # plt.title(f'{benchmark} {sub_benchmark} {subject}')
    # plt.legend()
    # plt.show()
    # exit()
