import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Typography } from '@mui/material';

import Layout from 'components/layout';
import { Container } from 'components/container';
import { Spacer } from 'components/spacer';

import { getAllPostsForHome } from 'lib/api';
import PostPreview from 'components/posts/post-preview';

export default function Index({ allPosts, preview }) {
  console.log(allPosts);
  return (
    <Layout preview={preview}>
      <Head>
        <title>{'News & Insights | Foodie'}</title>
      </Head>
      <Spacer />

      <Container>
        <Typography mb={3} component={'h1'} variant="h3">
          News & Insights
        </Typography>
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10">
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
