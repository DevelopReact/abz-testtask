// react
import { FC, useState } from "react";
//ui
import { Input } from "@/shared/ui/Input";
import { RadioButton } from "@/shared/ui/RadioButton";
// styles
import styles from "./UserForm.module.scss";

interface UserFormProps {}

export const UserForm: FC<UserFormProps> = ({}) => {
  const [checked, setChecked] = useState(false);
  const onChoosePositionClick = () => {
    setChecked(!checked);
  };

  return (
    <div className={styles.UserForm}>
      <Input placeholder="Your name" />
      <Input placeholder="Email" />
      <Input placeholder="Phone" />
      <div className={styles.PositionSelects}>
        <p>Select your position</p>
        <RadioButton
          label="Frontend developer"
          onClick={onChoosePositionClick}
          borderColor={checked ? "checked" : "disabled"}
        />
        <RadioButton
          label="Backend developer"
          onClick={onChoosePositionClick}
          borderColor={checked ? "checked" : "disabled"}
        />
        <RadioButton
          label="Designer"
          onClick={onChoosePositionClick}
          borderColor={checked ? "checked" : "disabled"}
        />
        <RadioButton
          label="QA"
          onClick={onChoosePositionClick}
          borderColor={checked ? "checked" : "disabled"}
        />
      </div>
    </div>
  );
};
