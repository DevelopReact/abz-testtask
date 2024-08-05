// react
import { FC, useEffect } from 'react';
//ui
import { Home } from '@/pages/home/ui';
// styles
import styles from './App.module.scss';

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={styles.App}>
      <Home />
    </div>
  );
};
