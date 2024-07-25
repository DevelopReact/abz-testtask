// react
import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
// styles
import styles from "./Input.module.scss";

interface InputProps {
  placeholder: string;
  register?: UseFormRegisterReturn;
  error?: {
    message?: string;
  };
}

export const Input: FC<InputProps> = ({ placeholder, register, error }) => {
  return (
    <>
      <input placeholder={placeholder} {...register} className={styles.Input} />
      {error && <span>{error.message}</span>}
    </>
  );
};
