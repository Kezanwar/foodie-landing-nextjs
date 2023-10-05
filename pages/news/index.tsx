import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Typography } from '@mui/material';

import Layout from 'components/layout';
import { Container } from 'components/container';
import { Spacer } from 'components/spacer';
import PostPreview from 'components/posts/post-preview';

import { getAllPostsForHome } from 'lib/api';

export default function Index({ allPosts, preview }) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>{'News & Insights | Foodie'}</title>
      </Head>
      <Spacer />

      <Container>
        <Typography textAlign={'center'} mb={3} variant="h2">
          News & Insights
        </Typography>
        <div className="mt-8 lg:mt-12 grid  md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allPosts?.edges?.map(({ node }) => (
            <PostPreview
              key={node.slug}
              title={node.title}
              coverImage={node.featuredImage}
              date={node.date}
              author={node.author}
              slug={node.slug}
              excerpt={node.excerpt}
              restaurant_review_fields={node.restaurant_review_fields}
            />
          ))}
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
