// react
import { FC } from "react";
//ui
import { HeaderDescribe } from "../HeaderDescribe";
import { HeaderNavMenu } from "../HeaderNavMenu";
// styles
import styles from "./Header.module.scss";

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className={styles.Header}>
      <HeaderNavMenu />
      <HeaderDescribe />
    </div>
  );
};
