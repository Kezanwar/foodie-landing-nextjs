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
import { Typography } from '@mui/material';
import { Container } from 'components/container';
import Image from 'next/image';

export default function Index({ allPosts, preview }) {
  // const heroPost = edges[0]?.node;
  // const morePosts = edges.slice(1);

  // console.log(allPosts);

  return (
    <Layout preview={preview}>
      <Head>
        <title>{'News & Insights | Foodie'}</title>
      </Head>
      <Spacer />

      <Container>
        <Typography mb={2} component={'h1'} variant="h2">
          News & Insights
        </Typography>
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Image
            alt="featured-post"
            src={
              'https://www.creativetourist.com/app/uploads/2015/10/10945572_919096154791470_3286054712372461805_n.jpg'
            }
            width={0}
            height={0}
            sizes="100vw"
            className="rounded-xl"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} // optional
          />
          <Image
            alt="featured-post"
            src={
              'https://www.creativetourist.com/app/uploads/2015/10/10945572_919096154791470_3286054712372461805_n.jpg'
            }
            width={0}
            height={0}
            sizes="100vw"
            className="rounded-xl"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} // optional
          />
          <Image
            alt="featured-post"
            src={
              'https://www.creativetourist.com/app/uploads/2015/10/10945572_919096154791470_3286054712372461805_n.jpg'
            }
            width={0}
            height={0}
            sizes="100vw"
            className="rounded-xl"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} // optional
          />
          <Image
            alt="featured-post"
            src={
              'https://www.creativetourist.com/app/uploads/2015/10/10945572_919096154791470_3286054712372461805_n.jpg'
            }
            width={0}
            height={0}
            sizes="100vw"
            className="rounded-xl"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} // optional
          />
          <Image
            alt="featured-post"
            src={
              'https://www.creativetourist.com/app/uploads/2015/10/10945572_919096154791470_3286054712372461805_n.jpg'
            }
            width={0}
            height={0}
            sizes="100vw"
            className="rounded-xl"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} // optional
          />
          <Image
            alt="featured-post"
            src={
              'https://www.creativetourist.com/app/uploads/2015/10/10945572_919096154791470_3286054712372461805_n.jpg'
            }
            width={0}
            height={0}
            sizes="100vw"
            className="rounded-xl"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} // optional
          />
        </div>
      </Container>
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
