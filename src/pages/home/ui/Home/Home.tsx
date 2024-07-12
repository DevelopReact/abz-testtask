// react
import { FC } from 'react';
//ui
import { Describe } from '../Describe';
// styles
import styles from './Home.module.scss';

interface HomeProps {}

export const Home: FC<HomeProps> = ({}) => {
  return (
    <div className={styles.Home}>
      <Describe />
    </div>
  );
};
