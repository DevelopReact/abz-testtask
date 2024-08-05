// react
import { ChangeEvent, FC, useEffect } from 'react';
import {
  FieldValues,
  UseFormRegisterReturn,
  UseFormSetValue
} from 'react-hook-form';
//lib
import classNames from 'classnames';
// styles
import styles from './Input.module.scss';

interface InputProps {
  id?: string;
  type: 'text' | 'email' | 'tel' | 'file';
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  register?: UseFormRegisterReturn;
  setValue?: UseFormSetValue<FieldValues>;
  value?: string | File;
  error?: {
    message?: string;
  };
}

export const Input: FC<InputProps> = ({
  id,
  type,
  placeholder,
  onChange,
  register,
  error,
  value,
  setValue
}) => {
  useEffect(() => {
    if (setValue && value) {
      setValue(register!.name, value);
    }
  }, [value, setValue, register]);

  return (
    <div className={styles.inputWrapper}>
      <input
        id={id}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        {...register}
        className={classNames(styles.Input, {
          [styles.errorInput]: error
        })}
      />
      {error && <span>{error.message}</span>}
    </div>
  );
};
