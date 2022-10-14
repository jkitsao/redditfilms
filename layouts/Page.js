import React from "react";
import Footer from "../components/Footer";
import MoviesComponent from "../components/MoviesComponent";
import Navigation from "../components/Navigation";
import Tabs from "../components/Tabs";
import Helmet from "../components/Helmet";

function Page({ data, title }) {
  return (
    <div className="page_layout">
      <div className="page_layout_overlay">
        {/* <Navigation /> */}
        <Helmet title={title} />
        <Tabs />
        <div className="pt-5 pb-8">
          {data && <MoviesComponent data={data?.data?.children} />}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
