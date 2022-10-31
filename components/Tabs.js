import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "./Footer";

function Tabs() {
  const tabs = [
    {
      name: 'Movies',
      icon: '/assets/movies-tab.png'
    }, {
      name: 'Tvshows',
      icon: '/assets/tv-tab.png'
    }, {
      name: 'Forum',
      icon: '/assets/forum-tab.jpg'
    }
  ];
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
    <>
      <section
        className="sm:w-4/5 md:w-3/4 sticky top-0 z-50 bg-black lg:w-1/2 xl:w-1/3  lg:mx-auto p-3 text-sm lg:text-base"
        id="tabs"
      >
        {/* bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-80 */}
        <div className="flex justify-center">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`py-1  rounded-md px-6  h-full mr-4 lg:mr-4 ${tab.name.toLocaleLowerCase() === activeTab
                ? "   text-green-200 border-2 border-dotted border-green-300"
                : " text-gray-300"
                }    transition-all hover:underline duration-150 ease-linear`}
            >
              <Link href={`/${tab.name.toLocaleLowerCase() === "movies" ? "/" : tab.name.toLocaleLowerCase()}`}>
                <a className="w-full h-full  justify-center items-center font-normal text-center">
                  <img src={tab.icon} className="w-5 h-5 mx-auto " alt='' />
                  <span className="text-center text-xs">
                    {tab.name}
                  </span>
                </a>

              </Link>
            </button>
          ))}
        </div>
      </section>

    </>
  );
}

export default Tabs;
