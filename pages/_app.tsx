import { AppProps } from 'next/app';
import '../styles/index.css';
import { SettingsProvider } from '../components/settings';
import ThemeProvider from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SettingsProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </SettingsProvider>
  );
}

export default MyApp;
