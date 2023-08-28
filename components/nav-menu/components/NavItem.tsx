import React, { FC } from 'react'
import { Box, Typography } from '@mui/material';

import { SvgColor } from 'components/svg-color';

import { MenuOption } from '../util'
import Link from 'next/link';

type Props = MenuOption & {
    isSelected: boolean;
}

const NavItem: FC<Props> = ({icon, text, link, isSelected}) => {

    const color = isSelected ? 'primary.main' : 'text.secondary';

  return (
    <Link href={link}>
      <div
        className={!isSelected ? 'opacity-50' : ''}
      >

        <Typography
          fontWeight={isSelected ? 600 : ''}
          color={color}

          variant="body1"
        >
          {text}
        </Typography>
      </div>
    </Link>
  );
}

export default NavItem