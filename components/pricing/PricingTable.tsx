import React from 'react';
import PricingPlanCard from './PricingCard';
import { Container, Stack, styled, Typography } from '@mui/material';

export const _pricingPlans = [
  {
    subscription: 'individual',
    price: 55,
    caption: 'The perfect package for individual Restaurants',
    lists: [
      { text: '1 Location', isAvailable: true },
      { text: '3 boards', isAvailable: true },
      { text: 'Up to 5 team members', isAvailable: false },
      { text: 'Advanced security', isAvailable: false },
      { text: 'Permissions & workflows', isAvailable: false }
    ]
  },
  {
    subscription: 'premium',
    price: 100,
    caption: 'Ideal package for a medium sized businesses',
    lists: [
      { text: '1 - 3 Locations', isAvailable: true },
      { text: '3 boards', isAvailable: true },
      { text: 'Up to 5 team members', isAvailable: true },
      { text: 'Advanced security', isAvailable: false },
      { text: 'Permissions & workflows', isAvailable: false }
    ]
  },
  {
    subscription: 'enterprise',
    price: 'Contact Sales',
    caption: 'Ideal package for multi-chain Restaurants',
    lists: [
      { text: '3 + Locations', isAvailable: true },
      { text: '3 boards', isAvailable: true },
      { text: 'Up to 5 team members', isAvailable: true },
      { text: 'Advanced security', isAvailable: true },
      { text: 'Permissions & workflows', isAvailable: true }
    ]
  }
];

const PricingWrapper = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: 16,
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
