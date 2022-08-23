import * as React from 'react';
import styles from './styles/loadingSpinner.scss';

export const LoadingSpinner = () => {
  return (
    <div className={styles.ldsRing}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
