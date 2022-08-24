import * as React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Months } from '@types';
import { useAppSelector } from '@redux/hooks';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'NO of lessons',
    },
  },
  animation: {
    duration: 0,
  },
};

const convertDataToMatchChartJS = (
  schoolGraph: Map<string, Map<keyof Months, number>>,
  chartColors: string[],
  hiddenCharts: string[],
) => {
  const datasets: {
    label: string;
    data: { x: Months; y: number }[];
    pointStyle: string;
    pointRadius: number;
    pointHoverRadius: number;
    borderColor: string;
    hidden: boolean;
  }[] = [];
  const labels: Months[] = Object.values(Months) as Months[];

  const sortByMonth = function (a: { x: Months; y: number }, b: { x: Months; y: number }) {
    return labels.indexOf(a.x) - labels.indexOf(b.x);
  };

  schoolGraph.forEach((value, key) => {
    datasets.push({
      pointStyle: 'circle',
      pointRadius: 7,
      pointHoverRadius: 15,
      hidden: hiddenCharts.indexOf(key) > -1,
      label: key,
      borderColor: chartColors[datasets.length],
      data: Array.from(value, function (item) {
        return { x: item[0] as Months, y: item[1] };
      }).sort(sortByMonth),
    });
  });

  return {
    labels: Object.values(Months),
    datasets,
  };
};

export const Chart = ({
  schoolGraph,
  chartColors,
}: {
  schoolGraph: Map<string, Map<keyof Months, number>>;
  chartColors: string[];
}) => {
  const hiddenGraphs = useAppSelector((state) => state.data.hiddenGraphs);
  console.log(hiddenGraphs)
  const test = convertDataToMatchChartJS(schoolGraph, chartColors, hiddenGraphs);
  return (
    <div style={{ width: '100%', height: '39rem' }}>
      <Line options={options} data={test} />
    </div>
  );
};
