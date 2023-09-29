import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import { FooterContainer, FooterGrid } from './styles';
import Logo from 'components/logo';
import { Container } from 'components/container';

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterGrid>
          <Box letterSpacing={-0.5}>
            <Logo />
            <Typography mt={1} variant="body2">
              © foodie limited
            </Typography>
            <Typography variant="body2">all rights reserved</Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,

              letterSpacing: -0.5
            }}
          >
            <Typography variant="h6">Company</Typography>
            <Typography variant="body2">About us</Typography>
            <Typography variant="body2">Meet the team</Typography>
            <Typography variant="body2">FAQ</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,

              letterSpacing: -0.5
            }}
          >
            <Typography variant="h6">Product</Typography>
            <Typography variant="body2">Help guide</Typography>
            <Typography variant="body2">Pricing</Typography>
            <Typography variant="body2">Testimonials</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,

              letterSpacing: -0.5
            }}
          >
            <Typography variant="h6">Legals</Typography>
            <Typography variant="body2">Terms and conditions</Typography>
            <Typography variant="body2">Privacy policy</Typography>
            <Typography variant="body2">Support</Typography>
          </Box>
        </FooterGrid>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
