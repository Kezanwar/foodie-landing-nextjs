import React, { FC, useEffect, useState } from 'react';
import { useTheme, Typography } from '@mui/material';

import { Container } from 'components/container';
import { BlurIcon } from 'components/blur-icon';
import useIsMobile from 'hooks/useIsMobile';
import FloatInView from 'components/float-in-view';

type Props = {};

const FeaturesCustomer: FC<Props> = (props) => {
  const theme = useTheme();
  const deviceIsMob = useIsMobile();

  return (
    <Container>
      <FloatInView>
        <Typography textAlign={'center'} className=" mb-0 xl:mb-8" variant="h2">
          App features...
        </Typography>

        <div className="gap-12  grid lg:gap-20  grid-cols-1 lg:grid-cols-3">
          <BlurIcon
            deviceIsMob={deviceIsMob}
            icon="/static/icons/custom/heart-yellow.svg"
            title="Follow your favourites"
            color={theme.palette.warning.main}
            copy="Get instant updates from your favourite restaurants, bars and coffee shops"
          />
          <BlurIcon
            deviceIsMob={deviceIsMob}
            title="Find amazing deals"
            icon="/static/icons/custom/fork-knife-primary.svg"
            color={theme.palette.primary.main}
            copy="Discover deals and discounts that you never knew about wherever you are located."
          />

          <BlurIcon
            deviceIsMob={deviceIsMob}
            title="Free forever"
            color={theme.palette.success.main}
            icon="/static/icons/custom/star-success.svg"
            copy="No subscription fees, no hidden costs. Forever."
          />
        </div>
      </FloatInView>
    </Container>
  );
};

export default FeaturesCustomer;
