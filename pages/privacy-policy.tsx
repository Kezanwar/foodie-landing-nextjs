import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { Typography } from '@mui/material';
import { format } from 'date-fns';

import { Container } from 'components/container';
import Layout from 'components/layout';
import PostTitle from 'components/posts/post-title';
import styles from 'components/posts/post-body.module.css';

import { getPrivacyPolicyPage } from 'lib/api';

export default function PrivacyPolicy({ page, preview }) {
  const router = useRouter();

  if (!router.isFallback && !page) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Head>
          <title>{'Privacy Policy | Foodie'}</title>
          <meta
            property="og:image"
            // content={post.featuredImage?.node.sourceUrl}
          />
        </Head>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <Typography textAlign={'center'} mb={2} variant="h2">
              Privacy Policy
            </Typography>
            <Typography
              fontSize={13}
              color={'text.secondary'}
              textAlign={'center'}
              mb={2}
              variant="body2"
            >
              Last updated {format(new Date(page.date), 'do LLL yyyy')}
            </Typography>
            <article
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: page.content }}
            ></article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({}) => {
  const data = await getPrivacyPolicyPage();

  return {
    props: {
      page: data?.pages?.edges[0]?.node
    },
    revalidate: 10
  };
};
