import { Box, styled } from '@mui/material';

export const FooterContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(20),
  paddingTop: theme.spacing(3),
  minHeight: '30vh',
  background: `url(/static/images/footer-bg.svg)`,
  backgroundSize: '100%',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(12),
    background: `url(/static/images/footer-bg-mob.svg)`,
    minHeight: '30vh',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat'
  }
}));

export const FooterGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr 1fr 1fr',
  zIndex: 1,
  gap: 0,

  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(5),
  [theme.breakpoints.down(1400)]: {
    gridTemplateColumns: '1.75fr 1fr 1fr 1fr'
  },
  [theme.breakpoints.down(999)]: {
    gridTemplateColumns: '1fr 1fr 1fr 1fr'
  },
  [theme.breakpoints.down(768)]: {
    gridTemplateColumns: '1fr 1fr',
    gap: theme.spacing(6)
  }
}));
