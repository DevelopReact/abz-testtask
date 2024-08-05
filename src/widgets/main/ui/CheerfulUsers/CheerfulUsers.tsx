// react
import { FC } from 'react';
//context
import { useScrollContext } from '@/app/providers/context/scroll/ScrollContext';
//ui
import { UsersList } from '@/entities/users/ui';
// styles
import styles from './CheerfulUsers.module.scss';

interface CheerfulUsersProps {}

export const CheerfulUsers: FC<CheerfulUsersProps> = ({}) => {
  const { usersRef } = useScrollContext();

  return (
    <div className={styles.CheerfulUsers} ref={usersRef}>
      <div className={styles.titleCheerfulUsers}>
        <h1>Working with GET request</h1>
      </div>
      <UsersList />
    </div>
  );
};
