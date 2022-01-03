import "../styles/globals.css";
import "../styles/styling.css";
import "../styles/nprogress.css";
import Router from "next/router";
import nProgress from "nprogress";
import { ChakraProvider } from "@chakra-ui/react";

//detect route change

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <div>
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  );
}

export default MyApp;
