// react
import { FC } from "react";
//ui
import { UserCard } from "@/shared/ui/UserCard";
import { Button } from "@/shared/ui";
// styles
import styles from "./CheerfulUsers.module.scss";

interface CheerfulUsersProps {}

export const CheerfulUsers: FC<CheerfulUsersProps> = ({}) => {
  const onShowMoreClick = () => {};
  
  return (
    <div className={styles.CheerfulUsers}>
      <div className={styles.titleCheerfulUsers}>
        <h1>Working with GET request</h1>
      </div>
      <div className={styles.userCars}>
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
      <Button onClick={onShowMoreClick}>Show more</Button>
    </div>
  );
};
