/* eslint-disable react/display-name */
import PropTypes from 'prop-types';
import { FC, forwardRef } from 'react';
import Link from 'next/link';
import { SxProps, styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

// ----------------------------------------------------------------------

const LogoText = styled(Typography)(({ theme }) => ({
  fontSize: 54,
  letterSpacing: '-2px',
  lineHeight: '1',
  fontWeight: '800',
  textTransform: 'lowercase',
  background: `-webkit-linear-gradient(45deg, ${theme.palette.primary.main} 10%, ${theme.palette.primary.lighter} 90%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  paddingRight: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    fontSize: 46
  }
}));

type Props = {
  sx?: SxProps;
  disabledLink?: boolean;
};

const Logo: FC<Props> = forwardRef(
  ({ disabledLink = false, sx, ...other }, ref) => {
    const logo = (
      <Box
        ref={ref}
        component="div"
        sx={{
          ...sx
        }}
        {...other}
      >
        <LogoText>Foodie</LogoText>
      </Box>
    );

    if (disabledLink) {
      return <>{logo}</>;
    }

    return <Link href="/">{logo}</Link>;
  }
);

Logo.propTypes = {
  sx: PropTypes.object,
  disabledLink: PropTypes.bool
};

export default Logo;
