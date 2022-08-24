import { Chart } from '@components/chart/chart';
import { LessonsLegends } from '@components/lessonsLegends/lessonsLegends';
import { useAppSelector } from '@redux/hooks';
import { FilterOutput, FilterType } from '@types';
import { filterData } from '@utils';
import * as React from 'react';
import styles from './styles/chartContainer.scss';

export const ChartContainer = () => {
  const { data } = useAppSelector((state) => state.data);
  const campFilter = useAppSelector((state) => state.data[FilterType.CAMP_FILTER].filterValue);
  const schoolFilter = useAppSelector((state) => state.data[FilterType.SCHOOL_FILTER].filterValue);
  const countryFilter = useAppSelector(
    (state) => state.data[FilterType.COUNTRY_FILTER].filterValue,
  );

  const chartColors = ['#e8707d', '#8a5ea9', '#3ca6db', '#385e77', '#24a408'];

  const filteredOutput: FilterOutput = React.useMemo(
    () =>
      filterData(data, {
        campFilter,
        schoolFilter,
        countryFilter,
      }),
    [data, campFilter, schoolFilter, countryFilter],
  );

  return (
    <div>
      <div className={styles.bottomSideContainer}>
        <div className={styles.chartContainer}>
          <Chart schoolGraph={filteredOutput.schoolGraph} chartColors={chartColors} />
        </div>
        <div className={styles.lessonsLegendsContainer}>
          <LessonsLegends filteredOutput={filteredOutput} chartColors={chartColors} />
        </div>
      </div>
    </div>
  );
};
