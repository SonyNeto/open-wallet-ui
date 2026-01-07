import type { FC } from 'react';
import ReactECharts from 'echarts-for-react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getCategoriesPerPeriodQueryOpts } from '../../../queries/categories-queries';
import { usePeriod } from '../../../hooks/usePeriod';
import dayjs from 'dayjs';

export const CategoryPerPeriod: FC = () => {
  const { period } = usePeriod();

  const { data } = useSuspenseQuery({
    ...getCategoriesPerPeriodQueryOpts(
      dayjs().month(period.month).year(period.year).format('YYYYMM'),
    ),
  });

  const option = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      top: '5%',
      left: 'center',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 15,
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: data.data.categories.map((category) => ({
          value: category.total_amount,
          name: category.name,
        })),
      },
    ],
  };

  return <ReactECharts option={option} />;
};
