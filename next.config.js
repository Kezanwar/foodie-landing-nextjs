if (!process.env.WORDPRESS_API_URL) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `);
}

/** @type {import('next').NextConfig} */
module.exports = {
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.thefoodie.app',
        pathname: '/wp-content/uploads/**'
      }
    ],

    domains: [
      process.env.WORDPRESS_API_URL.match(/(?!(w+)\.)\w*(?:\w+\.)+\w+/)[0], // Valid WP Image domain.
      '0.gravatar.com',
      '1.gravatar.com',
      '2.gravatar.com',
      'secure.gravatar.com',
      'www.creativetourist.com'
    ]
  }
};
