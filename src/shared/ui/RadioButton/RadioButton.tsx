// react
import { FC } from "react";
//lib
import classNames from "classnames";
// styles
import styles from "./RadioButton.module.scss";

interface RadioButtonProps {
  label: string;
  onClick: () => void;
  borderColor: "checked" | "disabled";
}

export const RadioButton: FC<RadioButtonProps> = ({
  label,
  onClick,
  borderColor,
}) => {
  return (
    <div className={styles.RadioButton}>
      <div
        onClick={onClick}
        className={classNames(styles.IconRadioButton, {
          [styles.checkedBorder]: borderColor === "checked",
          [styles.disabledBorder]: borderColor === "disabled",
        })}
      >
        <div className={styles.Ellipse}></div>
      </div>
      {label}
    </div>
  );
};
