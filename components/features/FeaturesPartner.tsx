import React, { FC, useEffect, useState } from 'react';
import { useTheme, Typography } from '@mui/material';

import { Container } from 'components/container';
import { BlurIcon } from 'components/blur-icon';
import useIsMobile from 'hooks/useIsMobile';
import FloatInView from 'components/float-in-view';

type Props = {};

const FeaturesPartner: FC<Props> = (props) => {
  const theme = useTheme();
  const deviceIsMob = useIsMobile();

  return (
    <Container>
      <FloatInView>
        <Typography textAlign={'center'} className=" mb-0 xl:mb-8" variant="h2">
          Platform features...
        </Typography>

        <div className="gap-12  grid lg:gap-20  grid-cols-1 lg:grid-cols-3">
          <BlurIcon
            deviceIsMob={deviceIsMob}
            icon="/static/icons/custom/announce.svg"
            title="Expand your reach"
            color={theme.palette.warning.main}
            copy="Foodie helps you to reach a wider audience, attracting local and nearby foodies."
          />
          <BlurIcon
            deviceIsMob={deviceIsMob}
            title="Increase footfall"
            icon="/static/icons/custom/fork-knife-primary.svg"
            color={theme.palette.primary.main}
            copy="Foodie showcases your unique promotions to a vast community of food enthusiasts."
          />

          <BlurIcon
            deviceIsMob={deviceIsMob}
            title="Boost revenue"
            color={theme.palette.success.main}
            icon="/static/icons/custom/money.svg"
            copy="Through driving bookings and enticing diners to explore your full-price menu."
          />
        </div>
      </FloatInView>
    </Container>
  );
};

export default FeaturesPartner;
