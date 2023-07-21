import React, { useEffect, ReactElement, ReactNode } from "react";
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import Head from 'next/head';
// import { Poppins } from '@next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import themeOptions from 'themes';
import 'animate.css';
import "react-multi-carousel/lib/styles.css";
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'assets/scss/global.scss';

// const poppins = Poppins({
//   weight: ['100', '300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'optional',
// })

const theme = createTheme(themeOptions);
// const roboto  = Roboto({subsets: 'latin'});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout,
  // emotionCache: EmotionCache
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return getLayout(
    <>
      <Head>
        <title>FYP. BIO</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Generated by create next app" />
        <meta name="theme-color" content="#000" />
        <link rel="icon" href="/logo.svg" />
        <link rel="apple-touch-icon" href="/logo.svg" />
      </Head>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  )
}

export default MyApp
