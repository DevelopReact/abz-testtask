// react
import { FC, useEffect, useState } from 'react';
//api
import { useGetUsersQuery } from '../../api/userAPI';
//ui
import { Button, Error, Loader, UserCard } from '@/shared/ui';
//types
import { IUser } from '../../types/userTypes';
// styles
import styles from './UsersList.module.scss';

interface UsersListProps {}

export const UsersList: FC<UsersListProps> = ({}) => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState<IUser[]>([]);

  const { data, isLoading, isFetching, isError } = useGetUsersQuery(page, {
    skip: !page
  });

  const onShowMoreClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (data && data.users) {
      setUsers((prevUsers) => [...prevUsers, ...data.users]);
    }
  }, [data]);

  if (isLoading || isFetching) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <div className={styles.userCards}>
        {users.map(({ id, name, photo, position, email, phone }) => {
          return (
            <UserCard
              key={id}
              name={name}
              photo={photo}
              position={position}
              email={email}
              phone={phone}
            />
          );
        })}
      </div>
      <Button type='button' onClick={onShowMoreClick}>
        Show more
      </Button>
    </>
  );
};
