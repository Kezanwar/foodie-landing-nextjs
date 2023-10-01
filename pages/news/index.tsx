import Head from 'next/head';
import { GetStaticProps } from 'next';

import Layout from 'components/layout';
import { HeroCustomer } from 'components/hero';
import { FeaturesCustomer } from 'components/features';
import { HowItWorksCustomer } from 'components/how-it-works';
import { FaqsCustomer } from 'components/faqs';
import { Spacer } from 'components/spacer';

import { getAllPostsForHome } from 'lib/api';
import { CMS_NAME } from 'lib/constants';

export default function Index({ allPosts, preview }) {
  // const heroPost = edges[0]?.node;
  // const morePosts = edges.slice(1);

  // console.log(allPosts);

  return (
    <Layout preview={preview}>
      <Head>
        <title>{'Foodie | Find local restaurant deals'}</title>
      </Head>
      <Spacer />
      <HeroCustomer />
      <Spacer sp={16} />
      <FeaturesCustomer />
      <Spacer sp={16} />
      <HowItWorksCustomer />
      <Spacer sp={16} />
      <FaqsCustomer />
      <Spacer sp={16} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10
  };
};
