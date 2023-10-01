import React, { FC } from 'react';
import { Typography } from '@mui/material';

import { Container } from 'components/container';
import Image from 'next/image';
import { LightLoadingButton } from 'components/light-loading-button';

type Props = {};

const HeroPartner: FC<Props> = (props) => {
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
      <div className="flex  justify-center items-center py-8 gap-6">
        <LightLoadingButton sx={{ fontSize: 16 }}>
          Register Now
        </LightLoadingButton>
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
