import Head from 'next/head';
import Layout from 'components/layout';
import { Container } from 'components/container';
import { Typography, Box } from '@mui/material';
import { Spacer } from 'components/spacer';
import GradientText from 'components/gradient-text';
import { LightLoadingButton } from 'components/light-loading-button';
import { CustomAccordion } from 'components/custom-accordion';
import { LaunchOfferAccordionData } from 'components/faqs/data-launch-offer';
import { RESTAURANT_DASHBOARD_URL } from 'lib/constants';
import HeroLaunchTrial from 'components/hero/HeroLaunchTrial';
import LaunchDealStepsTimeline from 'components/launch-timeline';
import FloatInView from 'components/float-in-view';

// FAQ Section Component
const FAQSection = () => {
  return (
    <Container>
      <FloatInView>
        <Typography variant="h2" textAlign="center" mb={6}>
          Launch Offer Questions
        </Typography>

        <Box className="mt-12 lg:mt-16 mx-auto max-w-[900px] relative">
          <img
            src="/static/images/blur.svg"
            alt=""
            className="absolute top-1/2 w-[1000px] opacity-50 left-[90%] -translate-x-1/2 -translate-y-1/2 z-0"
          />
          <div className="z-10">
            <CustomAccordion data={LaunchOfferAccordionData} />
          </div>
        </Box>
      </FloatInView>
    </Container>
  );
};

// Main Page Component
export default function ThreeMonthFreeTrial({ preview }) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>Get 3 Months Free | Launch Offer | Foodie</title>
        <meta
          name="description"
          content="Launch your restaurant on Manchester's newest food discovery platform. Get 3 months completely free."
        />
      </Head>

      <Spacer />
      <HeroLaunchTrial />
      <Spacer sp={16} />
      <LaunchDealStepsTimeline />
      {/*
      <BenefitsSection />
      <Spacer sp={16} /> */}
      {/* <HowItWorksSection /> */}
      <Spacer sp={16} />
      <FAQSection />
      <Spacer sp={16} />
    </Layout>
  );
}
