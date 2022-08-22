import * as React from 'react';
import styles from '../src/app.module.scss';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation('');
  return <div className={styles.name}>{t(`hello`)}</div>;
}
export default App;
