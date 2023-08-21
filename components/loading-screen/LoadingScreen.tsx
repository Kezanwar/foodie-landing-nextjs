import React from 'react';
import Lottie from 'react-lottie';
import {  styled } from '@mui/material/styles';

import Logo from 'components/logo';

import animationData from 'assets/lottie/foodie-loading.json';
import { Typography } from '@mui/material';

const lottieOptions = {
  animationData,
  loop: true,
  autoplay: true
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice'
  //   }
};

const styles = { scale: '0.9',  };

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

const LoadingContainer = styled('div')(({ theme }) => ({
  marginTop: '-30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
}));

const LogoText = styled(Typography)(({ theme }) => ({
  marginTop: '-50px',
  fontSize: theme.spacing(14),
  letterSpacing: theme.spacing(-1),
  width: 'max-content',
  paddingRight: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  fontWeight: 'bold',
  textTransform: 'lowercase',
  background: `-webkit-linear-gradient(45deg, ${theme.palette.primary.main} 10%, ${theme.palette.primary.lighter} 90%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',

}));

export default function LoadingScreen() {
  return (
    <StyledRoot>
      <LoadingContainer>
        <LoadinLottie />
       <LogoText>Foodie</LogoText>
      </LoadingContainer>
    </StyledRoot>
  );
}
