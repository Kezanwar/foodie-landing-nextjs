import path from 'path';
import getConfig from 'next/config';

export const EXAMPLE_PATH = 'cms-wordpress';
export const CMS_NAME = 'WordPress';
export const CMS_URL = 'https://wordpress.org';
export const HOME_OG_IMAGE_URL =
  'https://og-image.vercel.app/Next.js%20Blog%20Example%20with%20**WordPress**.png?theme=light&md=1&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=data%3Aimage%2Fsvg%2Bxml%2C%253C%253Fxml+version%3D%271.0%27+encoding%3D%27UTF-8%27%253F%253E%253Csvg+preserveAspectRatio%3D%27xMidYMid%27+version%3D%271.1%27+viewBox%3D%270+0+256+255%27+xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%253E%253Cg+fill%3D%27%2523464342%27%253E%253Cpath+d%3D%27m18.124+127.5c0+43.295+25.161+80.711+61.646+98.441l-52.176-142.96c-6.0691+13.603-9.4699+28.657-9.4699+44.515zm183.22-5.5196c0-13.518-4.8557-22.88-9.0204-30.166-5.5446-9.01-10.742-16.64-10.742-25.65+0-10.055+7.6259-19.414+18.367-19.414+0.48494+0+0.94491+0.060358+1.4174+0.087415-19.46-17.828-45.387-28.714-73.863-28.714-38.213+0-71.832+19.606-91.39+49.302+2.5662+0.077008+4.9847+0.13112+7.039+0.13112+11.441+0+29.151-1.3882+29.151-1.3882+5.8963-0.34758+6.5915+8.3127+0.7014+9.01+0+0-5.9255+0.69724-12.519+1.0427l39.832+118.48+23.937-71.79-17.042-46.692c-5.8901-0.3455-11.47-1.0427-11.47-1.0427-5.8942-0.3455-5.2033-9.3575+0.69099-9.01+0+0+18.064+1.3882+28.811+1.3882+11.439+0+29.151-1.3882+29.151-1.3882+5.9005-0.34758+6.5936+8.3127+0.7014+9.01+0+0-5.938+0.69724-12.519+1.0427l39.528+117.58+10.91-36.458c4.7287-15.129+8.3273-25.995+8.3273-35.359zm-71.921+15.087l-32.818+95.363c9.7988+2.8805+20.162+4.4561+30.899+4.4561+12.738+0+24.953-2.202+36.323-6.2002-0.29346-0.46829-0.55987-0.96572-0.77841-1.5069l-33.625-92.112zm94.058-62.046c0.47037+3.4841+0.73678+7.2242+0.73678+11.247+0+11.1-2.073+23.577-8.3169+39.178l-33.411+96.599c32.518-18.963+54.391-54.193+54.391-94.545+0.002081-19.017-4.8557-36.899-13.399-52.48zm-95.977-75.023c-70.304+0-127.5+57.196-127.5+127.5+0+70.313+57.2+127.51+127.5+127.51+70.302+0+127.51-57.194+127.51-127.51-0.002082-70.304-57.209-127.5-127.51-127.5zm0+249.16c-67.08+0-121.66-54.578-121.66-121.66+0-67.08+54.576-121.65+121.66-121.65+67.078+0+121.65+54.574+121.65+121.65+0+67.084-54.574+121.66-121.65+121.66z%27%2F%253E%253C%2Fg%253E%253C%2Fsvg%253E';

export const serverPath = (staticFilePath: string) => {
  return path.join(
    getConfig().serverRuntimeConfig.PROJECT_ROOT,
    staticFilePath
  );
};

export const APP_ENV = process.env.NEXT_PUBLIC_APP_ENV;

export const isDev = APP_ENV === 'development';
export const isStaging = APP_ENV === 'staging';
export const isProd = APP_ENV === 'production';

export const DOMAIN =
  {
    ['development']: 'http://localhost:3000',
    ['staging']: 'https://thefoodiestaging.app',
    ['production']: 'https://thefoodie.app'
  }[APP_ENV] || '';

export const GLEAP_API_KEY = process.env.NEXT_PUBLIC_GLEAP_API_KEY;

export const RESTAURANT_DASHBOARD_URL =
  {
    ['development']: 'http://localhost:3033',
    ['staging']: 'https://dashboard.thefoodiestaging.app',
    ['production']: 'https://dashboard.thefoodie.app'
  }[APP_ENV] || '';

export const mediaQueries = {
  lgTablet: '(max-width: 1024px)',
  smlTablet: '(max-width: 768px)',
  lgPhone: '(max-width: 530px)',
  smlPhone: '(max-width: 400px)'
};

// $breakpoint-desktop-lg: 1600px;
// $breakpoint-desktop-sml: 1200px;
// $breakpoint-tablet-lg: 1024px;
// $breakpoint-tablet-sml: 768px;
// $breakpoint-phone-lg: 530px;
// $breakpoint-phone-sml: 400px;
