import React, { FC } from 'react';
import { Typography } from '@mui/material';

const SX = {
  fontSize: 11,
  letterSpacing: 0.75,
  textTransform: 'uppercase',
  fontWeight: '700',
  padding: 0,
  marginBottom: 2
};

type Props = { text: string };

const Subheader: FC<Props> = ({ text }) => (
  <Typography sx={SX} color={'text.secondary'}>
    {text}
  </Typography>
);

export default Subheader;
