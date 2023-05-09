import React from "react";
import Footer from "../components/Footer";
import MoviesComponent from "../components/MoviesComponent";
import Navigation from "../components/Navigation";
import Tabs from "../components/Tabs";
import Helmet from "../components/Helmet";
import Loader from "../components/loaders/Loader";

function Page({ data, title, isLoading }) {
  return (
    <>
      <div className="page_layout min-h-screen h-full">
        <div className="page_layout_overlay">
          {/* <Navigation /> */}
          <Helmet title={title} />
          <Tabs />
          <div className="pt-5 pb-8">
            {isLoading && <Loader />}
            {data && <MoviesComponent data={data?.data?.children} />}
          </div>
        </div>
        {!isLoading && <Footer />}
      </div>
    </>
  );
}

export default Page;
