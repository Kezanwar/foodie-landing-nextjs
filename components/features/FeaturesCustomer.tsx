import React, { FC } from 'react';
import { useTheme, Typography } from '@mui/material';

import { Container } from 'components/container';
import { BlurIcon } from 'components/blur-icon';

type Props = {};

const FeaturesCustomer: FC<Props> = (props) => {
  const theme = useTheme();

  return (
    <Container>
      <Typography textAlign={'center'} className=" mb-0 xl:mb-8" variant="h2">
        App features...
      </Typography>

      <div className="  grid gap-20  grid-cols-1 lg:grid-cols-3">
        <BlurIcon
          icon="/static/icons/custom/heart-yellow.svg"
          title="Follow your favourites"
          color={theme.palette.warning.main}
          copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa vero atque."
        />
        <BlurIcon
          title="Find amazing deals"
          icon="/static/icons/custom/fork-knife-primary.svg"
          color={theme.palette.primary.main}
          copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa vero atque."
        />

        <BlurIcon
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
