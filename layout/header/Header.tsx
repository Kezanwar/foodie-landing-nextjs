import React, { FC, useState } from 'react';

import { Container } from 'components/container';
import Logo from 'components/logo/Logo';
import { NavMenuDesktop } from 'components/nav-menu';
import { MobNavButton } from 'components/mob-nav-button';
import { MobNav } from 'components/mob-nav';

import { useResponsive } from 'hooks/useResponsive';

const Header: FC = () => {
  const [_, isTablet] = useResponsive();
  const [mobNavOpen, setMobNavOPen] = useState<boolean>(false);

  const toggleMobNav = () => setMobNavOPen((prev) => !prev);

  return (
    <Container>
      <div className="flex py-2 justify-between items-center">
        <Logo />
        {isTablet ? (
          <MobNavButton onClick={toggleMobNav} isOpen={mobNavOpen} />
        ) : (
          <NavMenuDesktop />
        )}
      </div>
      <MobNav isOpen={mobNavOpen} onClose={toggleMobNav} />
    </Container>
  );
};

export default Header;
