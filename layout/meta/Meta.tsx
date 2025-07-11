import { DOMAIN } from 'lib/constants';
import Head from 'next/head';

export default function Meta() {
  const url = DOMAIN;
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />

      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
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
      <meta
        property="og:image"
        content={`${url}/static/images/plate-icon-lg.png`}
      />
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
        content={`${url}/static/images/plate-icon-lg.png`}
      />
    </Head>
  );
}
