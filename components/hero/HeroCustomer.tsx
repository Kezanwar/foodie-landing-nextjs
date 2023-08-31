import React, { FC } from 'react';
import { Typography } from '@mui/material';

import { Container } from 'components/container';
import Image from 'next/image';

type Props = {};

const HeroCustomer: FC<Props> = (props) => {
  return (
    <Container>
      <div className="flex flex-col  justify-center items-center gap-3  pt-10">
        <Typography textAlign={'center'} mb={2} variant="h2">
          Lorem ipsum dolor sit amet
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
      <div className="flex  justify-center items-center gap-6">
        <button>
          <img
            className="w-[170px]"
            src="static/icons/app-store/apple-app-store.svg"
            alt="download on the apple app store"
          />
        </button>
        <button>
          <img
            className="w-[160px]"
            src="static/icons/app-store/google-play-store.svg"
            alt="download on the apple app store"
          />
        </button>
      </div>
      <div className="flex  justify-center items-end gap-3 pb-20 xl:pb-32 pt-4">
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
