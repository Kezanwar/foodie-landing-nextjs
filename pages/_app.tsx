//    ___                __ __
//  .'  _.-----.-----.--|  |__.-----.
//  |   _|  _  |  _  |  _  |  |  -__|
//  |__| |_____|_____|_____|__|_____|

import Gleap from 'gleap';
import { useEffect } from 'react';
import { AppProps } from 'next/app';

import { GLEAP_API_KEY } from 'lib/constants';
import ThemeProvider from 'theme';

import { SettingsProvider } from 'components/settings';
import { NavigationLoading } from 'layout/navigation-loading';
import { Header } from 'layout/header';

import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Run within useEffect to execute this code on the frontend.
    Gleap.initialize(GLEAP_API_KEY);
  }, []);
  return (
    <SettingsProvider>
      <ThemeProvider>
        <NavigationLoading />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </SettingsProvider>
  );
}

export default MyApp;
