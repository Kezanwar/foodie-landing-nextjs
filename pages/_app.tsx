import { AppProps } from 'next/app';

import { SettingsProvider } from 'components/settings';
import ThemeProvider from 'theme';

import { NavigationLoading } from 'layout/navigation-loading';

import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SettingsProvider>
      <ThemeProvider>
        <NavigationLoading />
        <Component {...pageProps} />
      </ThemeProvider>
    </SettingsProvider>
  );
}

export default MyApp;
