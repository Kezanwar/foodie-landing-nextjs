import React from 'react';
import Lottie from 'react-lottie';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

import animationData from 'assets/lottie/foodie-loading.json';
import Logo from 'components/logo';

const lottieOptions = {
  animationData,
  loop: true,
  autoplay: true
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice'
  //   }
};

const styles = { scale: '0.9' };

const LoadinLottie = () => {
  return <Lottie style={styles} options={lottieOptions} />;
};

const StyledRoot = styled('div')(({ theme }) => ({
  right: 0,
  bottom: 0,
  zIndex: 9998,
  width: '100vw',
  height: '100vh',
  maxHeight: '100vh',
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.default
}));

const LoadingContainer = styled('div')(() => ({
  marginTop: '-30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  ['.logo']: {
    width: '300px',
    marginTop: '-30px'
  }
}));

export default function LoadingScreen() {
  return (
    <StyledRoot>
      <LoadingContainer>
        <LoadinLottie />
        <Logo size="md" />
      </LoadingContainer>
    </StyledRoot>
  );
}
