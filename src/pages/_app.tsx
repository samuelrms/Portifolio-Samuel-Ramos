import { ThemeProvider } from 'styled-components';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/react';

import Aos from 'aos';
import 'aos/dist/aos.css';
import NextNProgress from 'nextjs-progressbar';
import { useForm, FormProvider } from 'react-hook-form';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';
import { Footer, Header } from '../components';
import { FormValues } from '../types';

function MyApp({ Component, pageProps }) {
  const methods = useForm<FormValues>({});
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <FormProvider {...methods}>
        <NextNProgress
          color={theme.primary}
          startPosition={0.3}
          stopDelayMs={200}
          height={6}
          showOnShallow
        />
        <Toaster position="top-center" reverseOrder={false} />
        <Header />

        <Component {...pageProps} />
        <Analytics />
        <Footer />

        <GlobalStyles />
      </FormProvider>
    </ThemeProvider>
  );
}

export default MyApp;
