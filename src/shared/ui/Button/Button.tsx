// react
import { FC, ReactNode } from 'react';
//lib
import classNames from 'classnames';
// styles
import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type: 'submit' | 'reset' | 'button';
}

export const Button: FC<ButtonProps> = ({ children, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(styles.Button, {
        [styles.disabledButton]: disabled
      })}
    >
      {children}
    </button>
  );
};
