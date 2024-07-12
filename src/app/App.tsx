// react
import { FC } from 'react';
//ui
import { Home } from '@/pages/home/ui';
// styles
import styles from './App.module.scss';

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
  return (
    <div className={styles.App}>
      <Home />
    </div>
  );
};
