import { LegendInfo } from '@components/schoolsLegend/legendInfo';
import { SchoolsLegend } from '@components/schoolsLegend/schoolsLegend';
import { FilterOutput } from '@types';
import * as React from 'react';
import styles from './styles/lessonsLegends.scss';

export const LessonsLegends = ({
  filteredOutput,
  chartColors,
}: {
  filteredOutput: FilterOutput;
  chartColors: string[];
}) => {
  return (
    <aside className={styles.legendsContainer}>
      <LegendInfo placeName={filteredOutput.campName} number={filteredOutput.totalLessons} />
      <div className={styles.schoolsLegendContainer}>
        <SchoolsLegend chartColors={chartColors} schoolsMap={filteredOutput.schoolLessons} />
      </div>
    </aside>
  );
};
