import React from "react";
import Head from "next/head";
function Helmet({ title }) {
  const description = "Get Movie and Tv shows recomendation from reddit";
  const pageTitle = title;
  const twitterHandle = "@j_kitsao";
  const currentURL = "redditmovies.xyz";
  const previewImage =
    "https://lucidcms.imgix.net/Black%20Movie%20Night%20Invitations%20Poster.jpg";
  const siteName = "redditmovies";
  return (
    <div className="bg-gray-900 h-0">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <title>{pageTitle}</title>
        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content={twitterHandle} key="twhandle" />
        {/* Open Graph */}
        <meta property="og:url" content={currentURL} key="ogurl" />
        <meta property="og:image" content={previewImage} key="ogimage" />
        <meta property="og:site_name" content={siteName} key="ogsitename" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
      </Head>
    </div>
  );
}

export default Helmet;
