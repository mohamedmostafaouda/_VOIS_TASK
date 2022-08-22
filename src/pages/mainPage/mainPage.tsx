import * as React from 'react';
import styles from './styles/mainPage.scss';

export const MainPage = () => {
  return (
    <main className={styles.mainContainer}>
      <h1 className={styles.title}>Analysis Chart</h1>
      <h2 className={styles.title}>Number of lessons</h2>
    </main>
  );
};
