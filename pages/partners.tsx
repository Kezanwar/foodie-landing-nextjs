import Head from 'next/head';
import { GetStaticProps } from 'next';

import Layout from 'components/layout';
import { HowItWorksPartner } from 'components/how-it-works';

import { Spacer } from 'components/spacer';

import { getAllPostsForHome } from 'lib/api';
import HeroPartner from 'components/hero/HeroPartner';
import FeaturesPartner from 'components/features/FeaturesPartner';
import FaqsPartner from 'components/faqs/FaqsPartner';
import PricingTable from 'components/pricing';

export default function Partners({ preview }) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>{'Partners | Foodie'}</title>
      </Head>
      <Spacer />
      <HeroPartner />
      <Spacer sp={20} />
      <FeaturesPartner />
      <Spacer sp={20} />
      <PricingTable />
      <Spacer sp={20} />
      <HowItWorksPartner />
      <Spacer sp={20} />
      <FaqsPartner />
      <Spacer sp={20} />
    </Layout>
  );
}
