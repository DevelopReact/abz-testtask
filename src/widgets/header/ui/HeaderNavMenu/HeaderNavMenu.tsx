// react
import { FC } from "react";
//ui
import { Button } from "@/shared/ui";
//assets
import Logo from "@/shared/libs/assets/svg/Group.svg?react";
import LogoText from "@/shared/libs/assets/svg/Vector.svg?react";
// styles
import styles from "./HeaderNavMenu.module.scss";

interface HeaderNavMenuProps {}

export const HeaderNavMenu: FC<HeaderNavMenuProps> = ({}) => {
  const onGetUsersClick = () => {};
  const onSignUpClick = () => {};

  return (
    <div className={styles.HeaderNavMenu}>
      <div className={styles.Logo}>
        <Logo />
        <LogoText />
      </div>
      <div className={styles.Menu}>
        <Button onClick={onGetUsersClick}>Users</Button>
        <Button onClick={onSignUpClick}>Sign up</Button>
      </div>
    </div>
  );
};
