import React from "react";
import Footer from "../components/Footer";
import MoviesComponent from "../components/MoviesComponent";
import Navigation from "../components/Navigation";
import Tabs from "../components/Tabs";
import Helmet from "../components/Helmet";

function Page({ data, title }) {
  return (
    <div className="">
      <Navigation />
      <Helmet title={title} />
      <div className="pt-5 pb-8">
        {data && <MoviesComponent data={data?.data?.children} />}
      </div>
      <Tabs />
      <Footer />

    </div>
  );
}

export default Page;
