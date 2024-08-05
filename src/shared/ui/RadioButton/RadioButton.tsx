// react
import { FC } from 'react';
//lib
import classNames from 'classnames';
// styles
import styles from './RadioButton.module.scss';
import { UseFormRegisterReturn } from 'react-hook-form';

interface RadioButtonProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export const RadioButton: FC<RadioButtonProps> = ({
  label,
  checked,
  onChange
}) => {
  return (
    <div className={styles.RadioButton}>
      <div
        onClick={onChange}
        className={classNames(styles.IconRadioButton, {
          [styles.activeBorder]: checked,
          [styles.disabledBorder]: !checked
        })}
      >
        {checked && <div className={styles.Ellipse}></div>}
      </div>
      {label}
    </div>
  );
};
