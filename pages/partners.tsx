import Head from 'next/head';
import { GetStaticProps } from 'next';

import Layout from 'components/layout';
import { HowItWorksCustomer } from 'components/how-it-works';
import { FaqsCustomer } from 'components/faqs';
import { Spacer } from 'components/spacer';

import { getAllPostsForHome } from 'lib/api';
import HeroPartner from 'components/hero/HeroPartner';
import FeaturesPartner from 'components/features/FeaturesPartner';

export default function Partners({ preview }) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>{'Partners | Foodie'}</title>
      </Head>
      <Spacer />
      <HeroPartner />
      <Spacer sp={10} />
      <FeaturesPartner />
      <Spacer sp={16} />
      <HowItWorksCustomer />
      <Spacer sp={16} />
      <FaqsCustomer />
      <Spacer sp={16} />
    </Layout>
  );
}
