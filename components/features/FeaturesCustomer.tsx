import React, { FC, useEffect, useState } from 'react';
import { useTheme, Typography } from '@mui/material';

import { Container } from 'components/container';
import { BlurIcon } from 'components/blur-icon';

type Props = {};

const FeaturesCustomer: FC<Props> = (props) => {
  const theme = useTheme();
  const [deviceIsMob, setDeviceIsMob] = useState<boolean>(false);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
    const mobile = Boolean(userAgent.match(/Android|iPhone|iPad|iPod/i));
    setDeviceIsMob(mobile);
  }, []);

  return (
    <Container>
      <Typography textAlign={'center'} className=" mb-0 xl:mb-8" variant="h2">
        App features...
      </Typography>

      <div className="gap-12  grid lg:gap-20  grid-cols-1 lg:grid-cols-3">
        <BlurIcon
          deviceIsMob={deviceIsMob}
          icon="/static/icons/custom/heart-yellow.svg"
          title="Follow your favourites"
          color={theme.palette.warning.main}
          copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa vero atque."
        />
        <BlurIcon
          deviceIsMob={deviceIsMob}
          title="Find amazing deals"
          icon="/static/icons/custom/fork-knife-primary.svg"
          color={theme.palette.primary.main}
          copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa vero atque."
        />

        <BlurIcon
          deviceIsMob={deviceIsMob}
          title="Free forever"
          color={theme.palette.success.main}
          icon="/static/icons/custom/star-success.svg"
          copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa vero atque."
        />
      </div>
    </Container>
  );
};

export default FeaturesCustomer;
