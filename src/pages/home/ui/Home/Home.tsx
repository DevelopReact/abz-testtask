// react
import { FC } from "react";
//ui
import { Header } from "@/widgets/header/ui";
import { CheerfulUsers } from "@/widgets/main/ui/CheerfulUsers";
// styles
import styles from "./Home.module.scss";

interface HomeProps {}

export const Home: FC<HomeProps> = ({}) => {
  return (
    <div className={styles.Home}>
      <Header />
      <CheerfulUsers/>
    </div>
  );
};
