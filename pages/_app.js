import "../styles/globals.css";
import "../styles/styling.css";
import "../styles/nprogress.css";
import Router from "next/router";
import nProgress from "nprogress";
import { ChakraProvider } from "@chakra-ui/react";
import Helmet from '../components/Helmet'
import React from "react";
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
//detect route change

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ChakraProvider>
          <div className="">
            {/* <Helmet/> */}
            <Component {...pageProps} />
            {/* </div> */}
          </div>
        </ChakraProvider>
      </Hydrate>
    </QueryClientProvider>

  );
}

export default MyApp;
