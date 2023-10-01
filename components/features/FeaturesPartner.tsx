import React, { FC, useEffect, useState } from 'react';
import { useTheme, Typography } from '@mui/material';

import { Container } from 'components/container';
import { BlurIcon } from 'components/blur-icon';

type Props = {};

const FeaturesPartner: FC<Props> = (props) => {
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
        Platform features...
      </Typography>

      <div className="gap-12  grid lg:gap-20  grid-cols-1 lg:grid-cols-3">
        <BlurIcon
          deviceIsMob={deviceIsMob}
          icon="/static/icons/custom/announce.svg"
          title="Expand your reach"
          color={theme.palette.warning.main}
          copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa vero atque."
        />
        <BlurIcon
          deviceIsMob={deviceIsMob}
          title="Get more bookings"
          icon="/static/icons/custom/fork-knife-primary.svg"
          color={theme.palette.primary.main}
          copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa vero atque."
        />

        <BlurIcon
          deviceIsMob={deviceIsMob}
          title="Increase revenue"
          color={theme.palette.success.main}
          icon="/static/icons/custom/money.svg"
          copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa vero atque."
        />
      </div>
    </Container>
  );
};

export default FeaturesPartner;
