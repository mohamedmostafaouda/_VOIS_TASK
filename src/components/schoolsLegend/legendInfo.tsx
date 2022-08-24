import * as React from 'react';
import styles from './styles/legendInfo.scss';

type Props = {
  number: number;
  placeName: string;
  color?: string;
};

export const LegendInfo = ({ number, placeName, color }: Props) => {
  return (
    <div>
      <div style={{color}} className={styles.totalTitleContainer}>
        <span className={styles.totalTitle}>{number}</span>
        <span>Lessons</span>
      </div>
      <div style={{color}} className={styles.campNameTitle}>in {placeName}</div>
    </div>
  );
};
