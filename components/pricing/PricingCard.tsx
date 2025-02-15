// @mui
import { Card, Typography, Box, Stack, styled } from '@mui/material';

import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

import PlanLabel from 'components/plan-label';
import { useResponsive } from 'hooks/useResponsive';
import { CancelOutlined } from '@mui/icons-material';

const CardWrapper = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  flex: 1,
  border: `dashed 1px ${theme.palette.divider}`,
  [theme.breakpoints.down('md')]: {},
  boxShadow: 'none'
}));

export default function PricingPlanCard({ card }) {
  const { subscription, price, caption, lists } = card;

  const isEnterprise = subscription === 'enterprise';

  const [_, isTablet] = useResponsive();

  return (
    <CardWrapper>
      <PlanLabel plan={subscription} />

      <Stack
        spacing={1}
        direction="row"
        sx={{ my: 2, height: isTablet ? '' : 60 }}
      >
        {!isEnterprise && <Typography variant="h5">£</Typography>}

        <Typography
          mt={isEnterprise ? 0.75 : 0}
          mb={isEnterprise ? 0.75 : 0}
          variant={!isEnterprise ? 'h2' : 'h3'}
        >
          {price}
        </Typography>

        {!isEnterprise && (
          <Typography
            component="span"
            sx={{ alignSelf: 'center', color: 'text.secondary' }}
          >
            /mo{' '}
            <Typography component={'span'} variant="caption">
              incl VAT
            </Typography>
          </Typography>
        )}
      </Stack>

      <Typography variant="body2" color="text.secondary">
        {caption}
      </Typography>

      <Stack component="ul" spacing={2} sx={{ p: 0, mt: 4, mb: 5 }}>
        {lists.map((item) => (
          <Stack
            key={item.text}
            component="li"
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{
              typography: 'body2',
              color: item.isAvailable ? 'text.primary' : 'text.disabled'
            }}
          >
            {item.isAvailable ? (
              <CheckCircleOutlinedIcon color="success" />
            ) : (
              <CancelOutlined color="inherit" />
            )}
            <Typography variant="body2">{item.text}</Typography>
          </Stack>
        ))}
      </Stack>
      {/* <Box display={'flex'} justifyContent={isTablet ? 'flex-end' : undefined}>
        <BlackLoadingButton
          loading={isLoading}
          size="medium"


        >
          {}
        </BlackLoadingButton>
      </Box> */}
    </CardWrapper>
  );
}
