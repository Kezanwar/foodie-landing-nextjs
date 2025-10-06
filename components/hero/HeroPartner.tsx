import React, { FC } from 'react';
import Image from 'next/image';
import { Skeleton, Typography, styled } from '@mui/material';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { Container } from 'components/container';

import { LightLoadingButton } from 'components/light-loading-button';
import { RESTAURANT_DASHBOARD_URL } from 'lib/constants';
import { LoadingButton } from '@mui/lab';
import GradientText from 'components/gradient-text';
import FloatInView from 'components/float-in-view';
import RegisterButton from 'components/register-button';
import LoadingNextImage from 'components/loading-image';

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
  return (
    <Container>
      <FloatInView>
        <div className="flex flex-col  justify-center items-center gap-4">
          <Typography textAlign={'center'} mb={2} variant="h2">
            {/* The platform built for restaurants — not distractions.
             */}
            No more cat videos stealing your spotlight
          </Typography>
          <Typography
            textAlign={'center'}
            className="xl:w-[50%]"
            variant="body1"
            color={'text.secondary'}
          >
            An average Social Media post reaches 2% of your followers. The other
            98% are busy sharing memes.
          </Typography>
          <Typography
            textAlign={'center'}
            className="xl:w-[50%]"
            variant="body1"
            color={'text.secondary'}
          >
            Our Platform: Your special offers, your happy hours,{' '}
            <GradientText fontWeight={'bold'}>
              visible 24/7 to foodies in your area.
            </GradientText>{' '}
          </Typography>
          <Typography
            textAlign={'center'}
            className="xl:w-[50%]"
            variant="body1"
            color={'text.secondary'}
          >
            {' '}
            No daily posts. No fiddly social media ads. No algorithms.{' '}
            <strong>Just footfall.</strong>
          </Typography>

          {/* The Foodie app serves as a powerful catalyst for the{' '}
            <GradientText fontWeight={'bold'}>
              Hospitality Industry,{' '}
            </GradientText>
            increasing footfall and revenue by connecting restaurants, bars, and
            coffee shops with a vast community of food enthusiasts. */}
          {/* </Typography> */}
        </div>
        <div className="flex  justify-center items-center py-8 mt-4 mb-4 gap-5">
          <RegisterButton />

          <a
            className="text-inherit"
            href={`${RESTAURANT_DASHBOARD_URL}/login`}
          >
            <BlackButton variant="outlined" color="inherit">
              Sign in <KeyboardArrowRightIcon fontSize="small" />
            </BlackButton>
          </a>
        </div>
        {/* <div className="flex flex-col lg:flex-row justify-center items-center gap-6 pt-8 "> */}
        <div className="flex  justify-center   ">
          <LoadingNextImage
            loadingFallback={
              <Skeleton height={600} width={600} animation={'wave'} />
            }
            height={700}
            width={800}
            alt="phone"
            src={'/static/images/macbook-deal.png'}
          />
        </div>
      </FloatInView>
    </Container>
  );
};

export default HeroPartner;
