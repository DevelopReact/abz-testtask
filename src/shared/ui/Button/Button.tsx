// react
import { FC, ReactNode } from 'react'
// styles
import styles from './Button.module.scss'

interface ButtonProps{
    children: ReactNode;
    onClick: () => void;
    disabled?: boolean
}

export const Button: FC<ButtonProps> = ({children, onClick, disabled}) => {
return (
<button 
onClick = {onClick}
disabled={disabled}
className={styles.Button}
>
    {children}
</button>
)
}
