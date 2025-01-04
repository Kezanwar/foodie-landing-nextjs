import React, { FC } from 'react';
import { Typography } from '@mui/material';

import { Container } from 'components/container';
import Image from 'next/image';
import GradientText from 'components/gradient-text';

type Props = {};

const HeroCustomer: FC<Props> = (props) => {
  return (
    <Container>
      <div className="flex flex-col  justify-center items-center gap-3">
        <Typography textAlign={'center'} mb={2} variant="h2">
          Local food deals you never knew about
        </Typography>
        <Typography
          textAlign={'center'}
          className="xl:w-[45%]"
          variant="body1"
          color={'text.secondary'}
        >
          Discovering local gems has never been easier — Foodie puts hidden
          specials and the best food deals{' '}
          <GradientText fontWeight={'bold'}>
            right at your fingertips!
          </GradientText>
        </Typography>
      </div>
      <div className="flex h-max -my-[20px]  justify-center items-center gap-3">
        <button className="reset-btn">
          <Image
            height={100}
            width={175}
            src="static/icons/app-store/apple-app-store.svg"
            alt="download on the apple app store"
          />
        </button>
        <button className="reset-btn">
          <Image
            height={100}
            width={160}
            src="static/icons/app-store/google-play-store.svg"
            alt="download on the apple app store"
          />
        </button>
      </div>
      <div className="flex  justify-center items-end gap-3  pt-4">
        <Image
          height={300}
          width={275}
          alt="phone"
          className="hidden md:block"
          src={'/static/images/phone.png'}
        />
        <Image
          height={300}
          width={300}
          alt="phone"
          className="hidden md:block"
          src={'/static/images/phone.png'}
        />
        <Image
          height={300}
          width={275}
          alt="phone"
          src={'/static/images/phone.png'}
        />
      </div>
    </Container>
  );
};

export default HeroCustomer;
