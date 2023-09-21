import { LoadingButton } from '@mui/lab';
import { alpha, styled } from '@mui/material';

const LightLoadingButton = styled(LoadingButton)(({ theme }) => ({
  backgroundColor: `${alpha(theme.palette.primary.main, 0.15)}`,
  color: 'primary'
}));

export default LightLoadingButton;
