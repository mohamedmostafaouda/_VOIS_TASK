import * as React from 'react';
import { Dropdown } from '@components';
import styles from './styles/lessonsFilters.scss';
import { FilterType } from '@types';
import { useTranslation } from 'react-i18next';

export const LessonsFilters = () => {
  const i18n = useTranslation();
  return (
    <div>
      <div className={styles.mainTitle}>{i18n.t`Number of lessons`}</div>

      <div className={styles.dropdownsContainer}>
        <Dropdown label={i18n.t`Select Country`} filterName={FilterType.COUNTRY_FILTER} />
        <Dropdown label={i18n.t`Select Camp`} filterName={FilterType.CAMP_FILTER} />
        <Dropdown label={i18n.t`Select School`} filterName={FilterType.SCHOOL_FILTER} />
      </div>
    </div>
  );
};
