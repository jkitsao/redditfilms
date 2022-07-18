import React from "react";

function Navigation() {
  return (
    <nav
      className=" lg:w-1/2 lg:mx-auto text-center mx-auto z-50 border-gray-200  px-4 py-6  w-full "
      id="navigation-bar"
    >
      <div className="container flex flex-wrap justify-center lg:justify-items-start items-center mx-auto">
        <div className="">
          <span
            className="self-center text-center text-4xl mx-2 font-bold "
            id="logo-text"
          >
            Movie and Tv recomendations from reddit
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
