import React from 'react';
import PricingPlanCard from './PricingCard';
import { Container, Stack, styled, Typography } from '@mui/material';

export const _pricingPlans = [
  {
    subscription: 'individual',
    price: 66,
    caption:
      'Perfect for start-ups and small restaurants with a single location.',
    lists: [
      { text: 'Single location', isAvailable: true },
      { text: 'Max 3 deals at any time', isAvailable: true },
      { text: 'Partner Dashboard to manage deals', isAvailable: true },
      {
        text: 'Analytics to track deal performance and customer engagement.',
        isAvailable: true
      }
    ]
  },
  {
    subscription: 'premium',
    price: 120,
    caption: 'Suitable for growing businesses with up to 3 locations.',
    lists: [
      { text: 'Up to 3 Locations', isAvailable: true },
      { text: 'Max 15 deals across the locations', isAvailable: true },
      { text: 'Partner Dashboard to manage deals.', isAvailable: true },
      {
        text: 'Analytics to track deal performance and customer engagement.',
        isAvailable: true
      }
    ]
  },
  {
    subscription: 'enterprise',
    price: 'Contact Sales',
    caption: 'Tailored for large enterprises with unlimited locations.',
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
      <Typography textAlign={'center'} mb={6} variant="h2">
        Pricing
      </Typography>
      <PricingWrapper>
        {_pricingPlans.map((card) => (
          <PricingPlanCard key={card.subscription} card={card} />
        ))}
      </PricingWrapper>
    </Container>
  );
};

export default PricingTable;
