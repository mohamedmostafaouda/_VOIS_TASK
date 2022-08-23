import * as React from 'react';
import { Dropdown } from '@components';
import styles from './styles/lessonsFilters.scss';
import { FilterType } from '@types';

export const LessonsFilters = () => {
  return (
    <div>
      <div className={styles.mainTitle}>Number of lessons</div>

      <div className={styles.dropdownsContainer}>
        <Dropdown label="Select Country" filterName={FilterType.COUNTRY_FILTER} />
        <Dropdown label="Select Camp" filterName={FilterType.CAMP_FILTER} />
        <Dropdown label="Select School" filterName={FilterType.SCHOOL_FILTER} />
      </div>
    </div>
  );
};
