import * as React from 'react';
import styles from './styles/mainPage.scss';
import { LessonsFilters, Logo } from '@components';
import { LoadingScreen } from '@components/loadingScreen/loadingScreen';
import { ChartContainer } from '@components/chartContainer/chartContainer';
import { useFetchData } from 'hooks/useFetchData';
import { Header } from '@components/header/header';

export const MainPage = () => {
  const {loaded} = useFetchData();
  
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
