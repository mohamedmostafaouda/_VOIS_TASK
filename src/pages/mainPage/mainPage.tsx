import * as React from 'react';
import styles from './styles/mainPage.scss';
import { LessonsFilters, LoadingScreen, ChartContainer, Header } from '@components';
import { useFetchData } from 'hooks/useFetchData';

export const MainPage = () => {
  const { loaded } = useFetchData();

  return (
    <div>
      {!loaded && <LoadingScreen />}
      <main className={styles.mainContainer}>
        <Header />
        <LessonsFilters />
        <ChartContainer />
      </main>
    </div>
  );
};
