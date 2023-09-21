import React, { FC } from 'react';

import { Container } from 'components/container';
import Logo from 'components/logo/Logo';
import { NavMenuDesktop } from 'components/nav-menu';


type Props = {};

const Header: FC<Props> = (props) => {
  return (
    <Container >
      <div className="flex py-2 justify-between">
        <Logo />
        <NavMenuDesktop />
      </div>
    </Container>
  );
};

export default Header;
