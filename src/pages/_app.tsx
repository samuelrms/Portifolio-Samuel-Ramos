import { ThemeProvider } from 'styled-components';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import Aos from 'aos';
import 'aos/dist/aos.css';
import NextNProgress from 'nextjs-progressbar';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <NextNProgress
        color={theme.primary}
        startPosition={0.3}
        stopDelayMs={200}
        height={6}
        showOnShallow
      />
      <Toaster position="top-center" reverseOrder={false} />

      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
