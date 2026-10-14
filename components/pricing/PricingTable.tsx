import React from 'react';
import PricingPlanCard from './PricingCard';
import { Container, Stack, styled, Typography } from '@mui/material';
import FloatInView from 'components/float-in-view';

export const _pricingPlans = [
  {
    subscription: 'individual',
    price: 9.99,
    caption:
      'Perfect for start-ups and small restaurants with a single location.',
    lists: [
      { text: 'Single location', isAvailable: true },
      { text: 'Max 5 deals at any time', isAvailable: true },
      { text: 'Partner Dashboard to manage deals', isAvailable: true },
      {
        text: 'Analytics to track deal performance and customer engagement.',
        isAvailable: true
      }
    ]
  },
  {
    subscription: 'premium',
    price: 29.99,
    caption: 'Unlimited locations and deals for growing businesses.',
    lists: [
      { text: 'Unlimited locations', isAvailable: true },
      { text: 'Unlimited deals', isAvailable: true },
      { text: 'Partner Dashboard to manage deals.', isAvailable: true },
      {
        text: 'Analytics to track deal performance and customer engagement.',
        isAvailable: true
      }
    ]
  }
  // Enterprise is hidden, not removed. Premium is now unlimited on locations and
  // deals, so the two cards had identical features and nothing to choose between.
  // The API still handles the enterprise tier and its contact-sales enquiry, so
  // existing enterprise customers are unaffected and this can come back whenever
  // there's a real difference to sell.
  // {
  //   subscription: 'enterprise',
  //   price: 'Contact Sales',
  //   caption: 'Tailored for large enterprises with unlimited locations.',
  //   lists: [
  //     { text: 'Unlimited locations', isAvailable: true },
  //     { text: 'Unlimited deals', isAvailable: true },
  //     { text: 'Partner Dashboard to manage deals.', isAvailable: true },
  //     {
  //       text: 'Analytics to track deal performance and customer engagement.',
  //       isAvailable: true
  //     }
  //   ]
  // }
];

const PricingWrapper = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: 48,
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column'
  }
}));

const PricingTable = () => {
  return (
    <Container>
      <FloatInView>
        <Typography textAlign={'center'} mb={6} variant="h2">
          Pricing
        </Typography>
        <PricingWrapper>
          {_pricingPlans.map((card) => (
            <PricingPlanCard key={card.subscription} card={card} />
          ))}
        </PricingWrapper>
      </FloatInView>
    </Container>
  );
};

export default PricingTable;
