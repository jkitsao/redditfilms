import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "./Footer";

function Tabs() {
  const tabs = [
    {
      name: 'Movies',
      icon: 'https://img.icons8.com/dusk/344/movies-folder.png'
    }, {
      name: 'Tvshows',
      icon: 'https://img.icons8.com/office/344/retro-tv.png'
    }, {
      name: 'Forum',
      icon: 'https://img.icons8.com/external-filled-color-icons-papa-vector/344/external-forum-online-platforms-color-filled-filled-color-icons-papa-vector.png'
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
        className="sm:w-4/5 md:w-3/4 sticky bottom-0 lg:top-0 z-50 lg:w-1/2 xl:w-1/3 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 lg:mx-auto p-3 text-sm lg:text-base"
        id="tabs"
      >
        <div className="flex justify-center">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`py-2  rounded-md px-6  h-full mr-4 lg:mr-4 ${tab.name.toLocaleLowerCase() === activeTab
                ? "  underline  text-green-300 border border-green-700"
                : " text-gray-300"
                }    transition-all hover:underline duration-150 ease-linear`}
            >
              <Link href={`/${tab.name.toLocaleLowerCase() === "movies" ? "/" : tab.name.toLocaleLowerCase()}`}>


                <a className="w-full h-full  justify-center items-center font-normal text-center">
                  <img src={tab.icon} className="w-5 h-5 mx-auto " alt='' />
                  <span className="text-center">
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
