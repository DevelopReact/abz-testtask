// react
import { FC } from 'react'
// styles
import styles from './UserCard.module.scss'

interface UserCardProps{}

export const UserCard: FC<UserCardProps> = ({}) => {
return (
<div className={styles.UserCard}>
    <div className={styles.userImage}></div>
</div>
)
}
