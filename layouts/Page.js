import React from "react";
import Footer from "../components/Footer";
import MoviesComponent from "../components/MoviesComponent";
import Navigation from "../components/Navigation";
import Tabs from "../components/Tabs";
function Page({ data }) {
  return (
    <div className="bg-gray-900 pb-5 h-full min-h-screen">
      <Navigation />
      <Tabs />
      <div className="pt-5 pb-8">
        {data && <MoviesComponent data={data?.data?.children} />}
      </div>
      <Footer />
    </div>
  );
}

export default Page;
