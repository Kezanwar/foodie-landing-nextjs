import { styled } from '@mui/material';
import { LightLoadingButton } from 'components/light-loading-button';

export const ActionBtn = styled(LightLoadingButton)(({ theme }) => ({
  width: 'max-content',
  margin: 'auto',
  [theme.breakpoints.up('lg')]: {
    margin: '0'
  }
}));
