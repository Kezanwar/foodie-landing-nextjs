import Head from 'next/head';
import { GetStaticProps } from 'next';

import Layout from '../components/layout';
import { HeroCustomer } from '../components/hero';
import { FeaturesCustomer } from '../components/features';
import { HowItWorksCustomer } from 'components/how-it-works';
import { FaqsCustomer } from 'components/faqs';
import { Spacer } from 'components/spacer';

import { getAllPostsForHome } from '../lib/api';
import { CMS_NAME } from '../lib/constants';
import { Typography } from '@mui/material';

export default function Custom404() {
  // const heroPost = edges[0]?.node;
  // const morePosts = edges.slice(1);

  // console.log(allPosts);

  return (
    <Layout>
      <Head>
        <title>{'404 | Page not found'}</title>
      </Head>
      <Spacer />
      <Typography textAlign={'center'} mb={6} variant="h2">
        Oops!
      </Typography>
      <Typography textAlign={'center'} mb={6} color={'primary'} variant="h4">
        404 Error
      </Typography>
      <Typography textAlign={'center'} mb={2} variant="body2">
        Sorry this page doesn't exist....
      </Typography>
    </Layout>
  );
}
