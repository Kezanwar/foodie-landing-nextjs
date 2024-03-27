import React, { FC } from 'react';
import { Box, Grid, Typography } from '@mui/material';

import { FooterContainer, FooterGrid } from './styles';
import Logo from 'components/logo';
import { Container } from 'components/container';
import Link from 'next/link';

type ILink = {
  text: string;
  url: string;
};

const COMPANY_LINKS: ILink[] = [
  { text: 'About us', url: '/about-us' },
  { text: 'Meet the team', url: '/meet-the-team' },
  { text: 'FAQ', url: '/faq' }
];

const PRODUCT_LINKS: ILink[] = [
  { text: 'Support', url: '/support' },
  { text: 'Pricing', url: '/pricing' },
  { text: 'Testimonials', url: '/testimonials' }
];

const LEGAL_LINKS: ILink[] = [
  { text: 'Terms and conditions', url: '/terms-and-conditions' },
  { text: 'Privacy Policy', url: '/privacy-policy' }
];

const FooterLink: FC<{ link: ILink }> = ({ link }) => {
  return (
    <Typography color={'text.primary'} variant="body2">
      <Link href={link.url}>{link.text}</Link>
    </Typography>
  );
};

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterGrid>
          <Box letterSpacing={-0.5}>
            <Logo />
            <Typography mt={1} variant="body2">
              © The Foodie Marketing Company Ltd
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
            {COMPANY_LINKS.map((link) => (
              <FooterLink key={link.url} link={link} />
            ))}
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
            {PRODUCT_LINKS.map((link) => (
              <FooterLink key={link.url} link={link} />
            ))}
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
            {LEGAL_LINKS.map((link) => (
              <FooterLink key={link.url} link={link} />
            ))}
          </Box>
        </FooterGrid>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
