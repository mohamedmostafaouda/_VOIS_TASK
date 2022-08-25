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
  InteractionItem,
} from 'chart.js';
import { getElementAtEvent, Line } from 'react-chartjs-2';
import { FilterType, Months } from '@types';
import { useAppSelector } from '@redux/hooks';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

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
  const chartRef = React.useRef(null);
  const navigate = useNavigate();
  const hiddenGraphs = useAppSelector((state) => state.data.hiddenGraphs);
  const countryFilter = useAppSelector(
    (state) => state.data[FilterType.COUNTRY_FILTER].filterValue,
  );
  const campFilter = useAppSelector((state) => state.data[FilterType.CAMP_FILTER].filterValue);
  const data = convertDataToMatchChartJS(schoolGraph, chartColors, hiddenGraphs);
  const i18n = useTranslation();
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: i18n.t`NO of lessons`,
      },
    },
    animation: {
      duration: 0,
    },
  };

  const printElementAtEvent = (element: InteractionItem[]) => {
    if (!element.length) return;

    const { datasetIndex, index } = element[0];
    navigate(
      `/point/${countryFilter}/${campFilter}/${data.datasets[datasetIndex].label}/${data.datasets[datasetIndex].data[index].x}`,
    );
  };

  const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const { current: chart } = chartRef;

    if (!chart) {
      return;
    }
    printElementAtEvent(getElementAtEvent(chart, event));
  };

  return (
    <div style={{ width: '100%', height: '39rem' }}>
      <Line ref={chartRef} onClick={handleClick} options={options} data={data} />
    </div>
  );
};
