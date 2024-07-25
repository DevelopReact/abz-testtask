// react
import { FC } from "react";
// styles
import styles from "./UserCard.module.scss";

import Takamaru from "../../libs/assets/png/takamaru.png";

interface UserCardProps {}

export const UserCard: FC<UserCardProps> = ({}) => {
  return (
    <div className={styles.UserCard}>
      <div className={styles.userImage}>
        <img src={Takamaru} alt="Takamaru"/>
      </div>
      <div className={styles.userName}>
        <p>Takamaru Ayako Jurrien</p>
      </div>
      <div className={styles.userContact}>
        <div className={styles.userRole}>
          <p>Lead Independent Director</p>
        </div>
        <div className={styles.userEmail}>
          <p>Takamuru@gmail.com</p>
        </div>
        <div className={styles.userPhone}>
          <p>+38 (098) 278 90 24</p>
        </div>
      </div>
    </div>
  );
};
