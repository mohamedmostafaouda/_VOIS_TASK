import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles/legendInfo.scss';

type Props = {
  number: number;
  placeName: string;
  color?: string;
};

export const LegendInfo = ({ number, placeName, color }: Props) => {
  const i18n = useTranslation();
  return (
    <div>
      <div style={{ color }} className={styles.totalTitleContainer}>
        <span className={styles.totalTitle}>{number}</span>
        <span>{i18n.t`Lessons`}</span>
      </div>
      <div style={{ color }} className={styles.campNameTitle}>
        {i18n.t`in`} {placeName}
      </div>
    </div>
  );
};
