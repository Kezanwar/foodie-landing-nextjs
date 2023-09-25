import Head from 'next/head';
import { GetStaticProps } from 'next';
import {
  Box,
  Button,
  ButtonBase,
  Typography,
  styled,
  useTheme
} from '@mui/material';

import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPostsForHome } from '../lib/api';
import { CMS_NAME } from '../lib/constants';

import { Container } from 'components/container';
import Image from 'next/image';
import { HeroCustomer } from '../components/hero';
import { BlurIcon } from '../components/blur-icon';
import { FeaturesCustomer } from '../components/features';
import { HowItWorksCustomer } from 'components/how-it-works';
import { FaqsCustomer } from 'components/faqs';
import { Spacer } from 'components/spacer';

const SectionOneWrapper = styled(Box)(({ theme }) => ({
  background: "url('static/images/mesh-bg-3.png')",
  width: '100%',
  minHeight: '100vh',
  backgroundSize: 'cover'
}));

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  const theme = useTheme();

  return (
    <Layout preview={preview}>
      <Head>
        <title>{'Foodie | Find local restaurant deals'}</title>
      </Head>
      <Spacer />
      <HeroCustomer />
      <Spacer sp={12} />
      <FeaturesCustomer />
      <Spacer sp={12} />
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
