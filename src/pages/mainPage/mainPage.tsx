import * as React from 'react';
import styles from './styles/mainPage.scss';
import { LessonsFilters, Logo } from '@components';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { getData } from '@redux/actions/data';
import { LoadingScreen } from '@components/loadingScreen/loadingScreen';

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const result:any = useAppSelector((state) => state);
  React.useEffect(() => {
    dispatch(getData() as any);
  }, []);

  return (
    <div>
      {!result.data && <LoadingScreen />}
      <main className={styles.mainContainer}>
        <Logo />
        <LessonsFilters />
      </main>
    </div>
  );
};
