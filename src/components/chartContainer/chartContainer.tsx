import { LessonsLegends, Chart } from '@components';
import { useAppSelector } from '@redux/hooks';
import { chartColors, FilterOutput, FilterType } from '@types';
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
    <div className={styles.topContainer}>
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
