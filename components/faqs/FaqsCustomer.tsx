import { Typography } from '@mui/material';
import { Container } from 'components/container';
import { CustomAccordion } from 'components/custom-accordion';

import React from 'react';
import { CustomerAccordionData } from './data';
import FloatInView from 'components/float-in-view';

const FaqsCustomer: React.FC = () => {
  return (
    <Container>
      <FloatInView>
        <Typography textAlign={'center'} mb={2} variant="h2">
          Frequently asked questions
        </Typography>
        <div className="mt-12 lg:mt-20 mx-auto max-w-[900px] relative">
          <img
            src="/static/images/blur.svg"
            alt=""
            className="absolute top-1/2  w-[1000px] opacity-50 left-[90%] -translate-x-1/2 -translate-y-1/2 z-0"
          />
          <div className="z-10">
            <CustomAccordion data={CustomerAccordionData} />
          </div>
        </div>
      </FloatInView>
    </Container>
  );
};

export default FaqsCustomer;
