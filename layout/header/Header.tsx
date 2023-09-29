import React, { FC, useState } from 'react';

import { Container } from 'components/container';
import Logo from 'components/logo/Logo';
import { NavMenuDesktop } from 'components/nav-menu';
import { MobNavButton } from 'components/mob-nav-button';
import { MobNav } from 'components/mob-nav';

import { useResponsive } from 'hooks/useResponsive';
import { Box, styled } from '@mui/material';

const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3)
}));

const Header: FC = () => {
  const [_, isTablet] = useResponsive();
  const [mobNavOpen, setMobNavOPen] = useState<boolean>(false);

  const toggleMobNav = () => setMobNavOPen((prev) => !prev);

  return (
    <>
      <Container>
        <Wrapper>
          <Logo />
          {isTablet ? (
            <MobNavButton onClick={toggleMobNav} isOpen={mobNavOpen} />
          ) : (
            <NavMenuDesktop />
          )}
        </Wrapper>
      </Container>
      <MobNav isOpen={mobNavOpen} onClose={toggleMobNav} />
    </>
  );
};

export default Header;
