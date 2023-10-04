import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Typography } from '@mui/material';

import Layout from 'components/layout';
import { Container } from 'components/container';
import { Spacer } from 'components/spacer';

import { getAllPostsForHome } from 'lib/api';

export default function Index({ allPosts, preview }) {
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
