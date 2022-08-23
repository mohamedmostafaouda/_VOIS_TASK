import { LoadingSpinner } from '@components/loadingSpinner/loadingSpinner';
import * as React from 'react';
import styles from './styles/loadingScreen.scss';

export const LoadingScreen = () => {
  return (
    <div className={styles.loadingScreenBackdrop}>
      <LoadingSpinner />
    </div>
  );
};
