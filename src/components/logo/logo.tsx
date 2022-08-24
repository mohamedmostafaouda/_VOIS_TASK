import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/logo.scss';

export const Logo = (): JSX.Element => {
  return <div className={styles.logo}>
    <Link to={'/'}>Analysis Chart</Link>
  </div>;
};
