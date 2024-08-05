// react
import { FC } from 'react';
// styles
import styles from './UserCard.module.scss';

interface UserCardProps {
  name: string;
  photo: string;
  position: string;
  email: string;
  phone: string;
}

export const UserCard: FC<UserCardProps> = ({
  name,
  photo,
  position,
  email,
  phone
}) => {
  return (
    <div className={styles.UserCard}>
      <div className={styles.userImage}>
        <img src={photo} alt={name} />
      </div>
      <div className={styles.userName}>{name}</div>
      <div className={styles.userContact}>
        <div className={styles.userRole}>{position}</div>
        <div className={styles.userEmail}>{email}</div>
        <div className={styles.userPhone}>{phone}</div>
      </div>
    </div>
  );
};
