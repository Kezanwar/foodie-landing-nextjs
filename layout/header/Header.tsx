import { Box } from '@mui/material';
import React, { FC } from 'react';

import Logo from 'components/logo/Logo';

type Props = {};

const Header: FC<Props> = (props) => {
  return (
    <Box>
      <Logo />
    </Box>
  );
};

export default Header;
