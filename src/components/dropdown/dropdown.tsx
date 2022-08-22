import * as React from 'react';
import styles from './styles/dropdown.scss';

type Props<T> = {
  label: string;
  placeholder: string;
  (e: T): void;
  data: Array<T>;
};

export const Dropdown = <T,>(Props: Props<T>): JSX.Element => {
  return (
    <div className={styles.dropdownContainer}>
      
    </div>
  );
};
