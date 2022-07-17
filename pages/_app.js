import "../styles/globals.css";
import "../styles/styling.css";
import "../styles/nprogress.css";
import Router from "next/router";
import nProgress from "nprogress";
import { ChakraProvider } from "@chakra-ui/react";
import Helmet from '../components/Helmet'
//detect route change

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <div className="page_layout">
        {/* <Helmet/> */}
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  );
}

export default MyApp;
