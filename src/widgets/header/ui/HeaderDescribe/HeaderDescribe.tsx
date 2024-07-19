// react
import { FC } from "react";
//ui
import { Button } from "@/shared/ui";
// styles
import styles from "./HeaderDescribe.module.scss";

interface HeaderDescribeProps {}

export const HeaderDescribe: FC<HeaderDescribeProps> = ({}) => {
  const onSignUpClick = () => {};

  return (
    <div className={styles.HeaderDescribe}>
      <h1>Test assignment for front-end developer</h1>
      <p>
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </p>
      <Button onClick={onSignUpClick}>Sign up</Button>
    </div>
  );
};
