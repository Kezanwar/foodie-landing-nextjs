import { isStaging } from 'lib/constants';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const url = isStaging
    ? 'https://thefoodiestaging.app'
    : 'https://thefoodie.app';
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
        {/* <!-- HTML Meta Tags --> */}
        <meta
          name="description"
          content="Local food deals you never knew about."
        />

        {/* <!-- Open Graph Meta Tags --> */}
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="The Foodie App" />
        <meta
          property="og:description"
          content="Local food deals you never knew about."
        />
        <meta property="og:image" content={`${url}/static/plate-icob-lg.png`} />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
        <meta property="og:image:alt" content="The Foodie App Icon" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta property="twitter:domain" content={url} />
        <meta property="twitter:url" content={url} />
        <meta name="twitter:title" content="The Foodie App" />
        <meta
          name="twitter:description"
          content="Local food deals you never knew about."
        />
        <meta
          name="twitter:image"
          content={`${url}/static/plate-icob-lg.png`}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
