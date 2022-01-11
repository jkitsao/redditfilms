import React from 'react'
import Head from 'next/head'
function Helmet() {
    const description='Get Movie and Tv shows recomendation from reddit r/movierecommendation & '
    const pageTitle='reddit movies'
    const twitterHandle=''
    const currentURL='redditmovies.xyz'
    const previewImage='https://og-image.xyz/og/RedditFilms/Get Movie and Tv recomendation from reddit/redditfilms.xyz/ /atkinson/descendsun/{{h}}f3d2ed/data.png'
    const siteName='redditmovies'
    return (
       <div className='bg-gray-900 h-0'>
       <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
+       <meta name="description" content={description} />
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
       </div>
    )
}

export default Helmet
