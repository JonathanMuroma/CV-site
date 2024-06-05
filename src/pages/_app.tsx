import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "@/components/layout";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const themeSettings = extendTheme({});
  const queryClient = new QueryClient();
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <ChakraProvider theme={themeSettings}>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
};

export default MyApp;
