import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { useMediaQuery, useTheme } from '@mui/material';

import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';
import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import FloatInView from 'components/float-in-view';

export default function LaunchDealStepsTimeline() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <FloatInView>
      <Typography textAlign={'center'} mb={6} variant="h2">
        How it works
      </Typography>

      <Timeline position={'alternate'}>
        <TimelineItem>
          {/* <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Step 1
        </TimelineOppositeContent> */}
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <DrawOutlinedIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span" fontSize={16}>
              Sign Up
            </Typography>
            <Typography
              width={isMobile ? 110 : 200}
              mr={isMobile ? 0 : 'auto'}
              color="text.secondary"
              variant="body2"
            >
              Create your account and restaurant profile
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          {/* <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          Step 2
        </TimelineOppositeContent> */}
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <CardMembershipOutlinedIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" fontSize={16} component="span">
              Choose Membership
            </Typography>
            <Typography
              width={isMobile ? 110 : 200}
              ml={'auto'}
              color="text.secondary"
              variant="body2"
            >
              Pick the right tier for your company size
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          {/* <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          Step 3
        </TimelineOppositeContent> */}
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <FavoriteBorderOutlinedIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" fontSize={16} component="span">
              Get 3 Months Free
            </Typography>
            <Typography
              width={isMobile ? 110 : 200}
              mr={'auto'}
              color="text.secondary"
              variant="body2"
            >
              Enter LAUNCH3 Discount Code at checkout for 3 months free
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          {/* <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          Step 4
        </TimelineOppositeContent> */}
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <AttachMoneyOutlinedIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" fontSize={16} component="span">
              Go Live
            </Typography>
            <Typography
              width={isMobile ? 110 : 200}
              ml={'auto'}
              color="text.secondary"
              variant="body2"
            >
              Create deals and start appearing in the app!
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </FloatInView>
  );
}
