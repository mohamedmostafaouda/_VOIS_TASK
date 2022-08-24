import { Logo } from '@components/logo/logo';
import { LoadingScreen } from '@components/loadingScreen/loadingScreen';
import { useFetchData } from 'hooks/useFetchData';
import { useGetPointData } from 'hooks/useGetPointData';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles/pointPage.scss';

export const PointPage = () => {
  const { loaded } = useFetchData();
  const { country, camp, school } = useParams();
  const itemData = useGetPointData(country ?? '', camp ?? '', school ?? '');
  const table = (
    <table className={styles.table}>
      <thead>
        <tr>
          <th> Country Name </th>
          <th> Camp Name </th>
          <th> School Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> 80 cm </td>
          <td> 60 cm </td>
          <td> 220 cm </td>
        </tr>
        <tr>
          <td> 70 cm </td>
          <td> 65 cm </td>
          <td> 80 cm </td>
        </tr>
        <tr>
          <td> 16 kg </td>
          <td> 22 kg </td>
          <td> 31 kg </td>
        </tr>
        <tr>
          <td> 120 cm </td>
          <td> 92 cm </td>
          <td> 80 cm </td>
        </tr>
      </tbody>
    </table>
  );
  const notFound = <div>Not Found</div>;

  const output = itemData ? table : notFound;
  return loaded ? (
    <>
      <Logo />
      <div className={styles.outputContainer}>{output}</div>
    </>
  ) : (
    <LoadingScreen />
  );
};
