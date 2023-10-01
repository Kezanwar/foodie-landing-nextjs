import { LoadingButton, LoadingButtonProps } from '@mui/lab';
import { alpha, styled } from '@mui/material';
import { FC } from 'react';

const LightLoadingButton: FC<LoadingButtonProps> = styled(LoadingButton)(
  ({ theme }) => ({
    backgroundColor: `${alpha(theme.palette.primary.main, 0.15)}`,
    color: 'primary'
  })
);

export default LightLoadingButton;
