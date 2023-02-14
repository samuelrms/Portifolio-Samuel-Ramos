import { ThemeProvider } from 'styled-components';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
