import React, { FC } from 'react';
import { Skeleton, Typography } from '@mui/material';

import { Container } from 'components/container';
import Image from 'next/image';
import GradientText from 'components/gradient-text';
import FloatInView from 'components/float-in-view';
import LoadingNextImage from 'components/loading-image';

type Props = {};

const HeroCustomer: FC<Props> = (props) => {
  return (
    <Container>
      <FloatInView>
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
          <a
            className="reset-btn"
            href="https://apps.apple.com/gb/app/foodie/id6743999340"
          >
            <Image
              height={100}
              width={175}
              src="static/icons/app-store/apple-app-store.svg"
              alt="download on the apple app store"
            />
          </a>
          <div className="relative inline-block">
            <Image
              height={100}
              width={160}
              src="static/icons/app-store/google-play-store.svg"
              alt="download on the google play store"
            />
            <div className="absolute inset-0 bg-black/10 backdrop-blur-[3px] rounded-[13px] h-[50px] top-1/2 translate-y-[-50%] flex items-center justify-center pointer-events-none">
              <span className="text-white font-bold text-sm">
                Android Coming Soon
              </span>
            </div>
          </div>
        </div>
        <div className="flex  justify-center items-end gap-3  pt-4">
          <LoadingNextImage
            loadingFallback={
              <Skeleton height={300} width={275} animation={'wave'} />
            }
            height={300}
            width={275}
            alt="phone"
            className="hidden md:block"
            src={'/static/images/phone-following.png'}
          />
          <LoadingNextImage
            loadingFallback={
              <Skeleton height={300} width={300} animation={'wave'} />
            }
            height={300}
            width={300}
            alt="phone"
            className="hidden md:block"
            src={'/static/images/phone-feed.png'}
          />
          <LoadingNextImage
            loadingFallback={
              <Skeleton height={300} width={275} animation={'wave'} />
            }
            height={300}
            width={275}
            alt="phone"
            src={'/static/images/phone-discover.png'}
          />
        </div>
      </FloatInView>
    </Container>
  );
};

export default HeroCustomer;
