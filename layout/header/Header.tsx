import { Box, Container, styled } from '@mui/material';
import React, { FC } from 'react';

import Logo from 'components/logo/Logo';
import { NavMenuDesktop } from '../../components/nav-menu';

type Props = {};

const Header: FC<Props> = (props) => {
  return (
    <Container maxWidth={'xl'}>
      <div className="flex py-2 justify-between">
        <Logo />
        <NavMenuDesktop />
      </div>
    </Container>
  );
};

export default Header;
