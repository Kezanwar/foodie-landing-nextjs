/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';

import Layout from '../components/layout';

import { Spacer } from 'components/spacer';

import { Typography } from '@mui/material';

export default function Custom404() {
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
