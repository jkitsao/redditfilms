import React from "react";

function Navigation() {
  return (
    <nav className=" bg-black z-50 border-gray-200  px-4 py-2.5  lg:w-1/3 lg:mx-auto ">
      <div className="container flex flex-wrap justify-center lg:justify-items-start items-center mx-auto">
        <div className="">
          <span
            className="self-center text-4xl mx-2 font-bold whitespace-nowrap"
            id="logo-text"
          >
            Redditfilms.xyz
          </span>
        </div>

        <div
          className="hidden w-full md:block md:w-auto"
          id="mobile-menu"
        ></div>
      </div>
    </nav>
  );
}

export default Navigation;
