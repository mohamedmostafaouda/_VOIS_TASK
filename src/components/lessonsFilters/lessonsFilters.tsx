import * as React from 'react';
import { Dropdown } from '@components';
import styles from './styles/lessonsFilters.scss';

export const LessonsFilters = () => {
  return (
    <div>
      <div className={styles.mainTitle}>Number of lessons</div>

      <div className={styles.dropdownsContainer}>
        <Dropdown
          placeholder='Select Country'
          label='Select Country'
          onChange={(item) => {
            console.log(item);
          }}
          data={[{ name: 'mohamed' }]}
          itemRenderer={(item) => item.name}
        />
        <Dropdown
          placeholder='Select Country'
          label='Select Country'
          onChange={(item) => {
            console.log(item);
          }}
          data={[{ name: 'mohamed' }]}
          itemRenderer={(item) => item.name}
        />
        <Dropdown
          placeholder='Select Country'
          label='Select Country'
          onChange={(item) => {
            console.log(item);
          }}
          data={[{ name: 'mohamed' }]}
          itemRenderer={(item) => item.name}
        />
      </div>
    </div>
  );
};
