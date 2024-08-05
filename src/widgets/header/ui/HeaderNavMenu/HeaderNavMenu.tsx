// react
import { FC } from 'react';
//context
import { useScrollContext } from '@/app/providers/context/scroll/ScrollContext';
//ui
import { Button } from '@/shared/ui';
//assets
import Logo from '@/shared/libs/assets/svg/Group.svg?react';
import LogoText from '@/shared/libs/assets/svg/Vector.svg?react';
// styles
import styles from './HeaderNavMenu.module.scss';

interface HeaderNavMenuProps {}

export const HeaderNavMenu: FC<HeaderNavMenuProps> = ({}) => {
  const { footerRef, usersRef } = useScrollContext();

  const onGetUsersClick = () => {
    if (usersRef.current) {
      usersRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const onSignUpClick = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.HeaderNavMenu}>
      <div className={styles.Logo}>
        <Logo />
        <LogoText />
      </div>
      <div className={styles.Menu}>
        <Button type='button' onClick={onGetUsersClick}>
          Users
        </Button>
        <Button type='button' onClick={onSignUpClick}>
          Sign up
        </Button>
      </div>
    </div>
  );
};
