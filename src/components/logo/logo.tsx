import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './styles/logo.scss';

export const Logo = (): JSX.Element => {
  const i18n = useTranslation();
  return (
    <div className={styles.logo}>
      <Link to={'/'}>{i18n.t`Analysis Chart`}</Link>
    </div>
  );
};
