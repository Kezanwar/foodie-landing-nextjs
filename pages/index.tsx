import Head from 'next/head';
import { GetStaticProps } from 'next';

import Layout from 'components/layout';
import { HeroCustomer } from 'components/hero';
import { FeaturesCustomer } from 'components/features';
import { HowItWorksCustomer } from 'components/how-it-works';
import { FaqsCustomer } from 'components/faqs';
import { Spacer } from 'components/spacer';

export default function Index({ preview }) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>{'Foodie | Find local restaurant deals'}</title>
      </Head>
      <Spacer />
      <HeroCustomer />
      <Spacer sp={16} />
      <FeaturesCustomer />
      {/* <Spacer sp={16} />
      <HowItWorksCustomer /> */}
      <Spacer sp={16} />
      <FaqsCustomer />
      <Spacer sp={16} />
    </Layout>
  );
}
