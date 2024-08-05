// react
import { FC } from 'react';
//context
import { useScrollContext } from '@/app/providers/context/scroll/ScrollContext';
//ui
import { UserForm } from '../UserForm/ui';
// styles
import styles from './Footer.module.scss';

interface FooterProps {}

export const Footer: FC<FooterProps> = ({}) => {
  const { footerRef } = useScrollContext();

  return (
    <div className={styles.Footer} ref={footerRef}>
      <div className={styles.titleFooter}>
        <h1>Working with POST request</h1>
      </div>
      <UserForm />
    </div>
  );
};
