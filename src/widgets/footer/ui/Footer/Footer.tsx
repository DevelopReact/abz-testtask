// react
import { FC } from "react";
//ui
import { UserForm } from "../UserForm";
// styles
import styles from "./Footer.module.scss";

interface FooterProps {}

export const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className={styles.Footer}>
      <div className={styles.titleFooter}>
        <h1>Working with POST request</h1>
      </div>
      <UserForm />
    </div>
  );
};
