import { Typography, TypographyProps } from '@mui/material';
import React, { FC } from 'react';

type Props = TypographyProps;

const GradientText: FC<Props> = ({ children, ...props }) => {
  return (
    <Typography
      fontSize={props.fontSize || 'inherit'}
      fontWeight={props.fontWeight || 'inherit'}
      {...props}
      component={'span'}
      className="gradient-text"
    >
      {children}
    </Typography>
  );
};

export default GradientText;
