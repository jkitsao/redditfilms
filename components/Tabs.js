import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Tabs() {
  const tabs = ["movies", "tvshows", "forum"];
  const [activeTab, setActiveTab] = useState("movies");
  //set active tab to current route
  const router = useRouter();
  const { asPath } = router;
  useEffect(() => {
    if (asPath === "/") setActiveTab("movies");
    if (asPath === "/tvshows") setActiveTab("tvshows");
    if (asPath === "/forum") setActiveTab("forum");
  }, [asPath]);
  return (
    <section className="lg:w-1/3  sticky top-0 z-50 bg-gray-900 lg:bg-neutral-900 rounded-b lg:mx-auto p-3 text-sm lg:text-base">
      <div className="flex justify-center">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-3 px-5 font-semibold rounded shadow-md h-full mr-4 lg:mr-4 ${
              tab === activeTab
                ? "bg-gray-800 lg:bg-gray-900  text-gray-200 border border-green-700"
                : "bg-gray-700 lg:bg-gray-800 text-gray-300"
            }   hover:bg-gray-600 transition-all duration-150 ease-linear`}
          >
            <Link href={`/${tab === "movies" ? "" : tab}`}>
              <a className="w-full h-full">{tab}</a>
            </Link>
          </button>
        ))}
      </div>
    </section>
  );
}

export default Tabs;
