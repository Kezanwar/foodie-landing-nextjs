import { Box, Typography } from '@mui/material';
import Gleap from 'gleap';
import Head from 'next/head';

import { Container } from 'components/container';
import Layout from 'components/layout';
import { LightLoadingButton } from 'components/light-loading-button';
import TryIcon from '@mui/icons-material/Try';
import GradientText from 'components/gradient-text';

export default function Support({ preview }) {
  return (
    <Layout preview={preview}>
      <Container>
        <Head>
          <title>{'Support | Foodie'}</title>
          <meta property="og:image" />
        </Head>
        <Box
          minHeight={'60vh'}
          display={'flex'}
          justifyContent={'center'}
          pt={2}
        >
          <Box maxWidth={700}>
            <Typography textAlign={'center'} mb={4} variant="h2">
              Need help?
            </Typography>
            <Typography
              color={'text.secondary'}
              textAlign={'center'}
              mb={8}
              variant="body2"
            >
              {`Welcome to Foodie Support! Your go-to resource for all things Foodie. Whether you're a customer or partner, or just starting out, find answers to general platform knowledge questions, or start a conversation with us using our`}
              <GradientText fontWeight={'bold'}>
                {' '}
                AI powered support tool.
              </GradientText>
            </Typography>
            <Box display={'flex'} justifyContent={'center'}>
              <LightLoadingButton
                onClick={Gleap.open}
                sx={{ fontSize: 16, minWidth: 110 }}
              >
                <TryIcon sx={{ mr: 1 }} fontSize="small" /> Get help
              </LightLoadingButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}
