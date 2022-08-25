import { LoadingScreen, Header } from '@components';
import { useFetchData } from 'hooks/useFetchData';
import { useGetPointData } from 'hooks/useGetPointData';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles/pointPage.scss';
import { useTranslation } from 'react-i18next';

export const PointPage = () => {
  const { loaded } = useFetchData();
  const { country, camp, school, month } = useParams();
  const itemData = useGetPointData(country ?? '', camp ?? '', school ?? '', month ?? '');
  const i18n = useTranslation();

  const table = (
    <table className={styles.table}>
      <thead>
        <tr>
          <th> {i18n.t`Country Name`} </th>
          <th> {i18n.t`Camp Name`} </th>
          <th> {i18n.t`School Name`}</th>
          <th> {i18n.t`Month`}</th>
          <th> {i18n.t`Total Lessons`}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> {itemData.country} </td>
          <td> {itemData.camp} </td>
          <td> {itemData.school} </td>
          <td> {itemData.month} </td>
          <td> {itemData.totalLessons} </td>
        </tr>
      </tbody>
    </table>
  );
  const notFound = <div>Not Found</div>;

  const output = itemData ? table : notFound;
  return loaded ? (
    <>
      <div className={styles.pageContainer}>
        <Header />
        <div className={styles.outputContainer}>{output}</div>
      </div>
    </>
  ) : (
    <LoadingScreen />
  );
};
