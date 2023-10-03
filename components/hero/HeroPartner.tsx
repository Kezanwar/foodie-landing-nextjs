import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Typography, styled } from '@mui/material';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { Container } from 'components/container';

import { LightLoadingButton } from 'components/light-loading-button';
import { RESTAURANT_DASHBOARD_URL } from 'lib/constants';
import { LoadingButton } from '@mui/lab';

type Props = {};

export const BlackButton = styled(LoadingButton)(({ theme }) => ({
  // color: 'white',
  fontSize: 16,
  paddingLeft: theme.spacing(1.5),
  paddingRight: theme.spacing(0.5),
  borderWidth: '2px'
  // '&:hover': {
  //   backgroundColor: theme.palette.grey[600]
  // }
}));

const HeroPartner: FC<Props> = () => {
  console.log(RESTAURANT_DASHBOARD_URL);
  return (
    <Container>
      <div className="flex flex-col  justify-center items-center gap-4">
        <Typography textAlign={'center'} mb={2} variant="h2">
          Partner Lorem ipsum dolor sit amet
        </Typography>
        <Typography
          textAlign={'center'}
          className="xl:w-[60%]"
          variant="body1"
          color={'text.secondary'}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit a
          consequuntur ex perferendis quis asperiores qui in beatae obcaecati
          exercitationem.
        </Typography>
      </div>
      <div className="flex  justify-center items-center py-8 gap-3">
        <a
          style={{ color: 'inherit' }}
          href={`${RESTAURANT_DASHBOARD_URL}/register`}
        >
          <LightLoadingButton sx={{ fontSize: 16, minWidth: 110 }}>
            <AppRegistrationIcon sx={{ mr: 0.5 }} fontSize="small" /> Register
          </LightLoadingButton>
        </a>

        <a
          style={{ color: 'inherit' }}
          href={`${RESTAURANT_DASHBOARD_URL}/login`}
        >
          <BlackButton variant="outlined" color="inherit">
            Sign in <KeyboardArrowRightIcon fontSize="small" />
          </BlackButton>
        </a>
      </div>
      {/* <div className="flex flex-col lg:flex-row justify-center items-center gap-6 pt-8 "> */}
      <div className="flex  justify-center  pt-6 ">
        <Image
          height={700}
          width={600}
          alt="phone"
          src={'/static/images/laptop-partners-example.png'}
        />
      </div>
    </Container>
  );
};

export default HeroPartner;
