import React from "react";
import Head from "next/head";
import { IntlProvider } from "react-intl";
import { ThemeProvider } from "styled-components";
import { theme } from "styles";
import translations from "translations";
import Script from "next/script";
import "styles/globals.css";
// import "styles/styles.css";
import { Layout } from "templates";

function MyApp({ Component, pageProps }) {
  const lang = "en";
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, viewport-fit=cover"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <IntlProvider locale={lang} messages={translations[lang]}>
          <Layout>
          <Component {...pageProps} />
          </Layout>
        </IntlProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
