import React, { useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

function ToggleComp({
  setIsCommentsOpen,
  isCommentsOpen,
  setIsLoading,
  isLoading,
}) {
  let [color, setColor] = useState("#f00");

  return (
    // <div
    //   role="button"
    //   className="w-full flex justify-center items-center bg-transparent shadow-md mt-10 py-4 absolute bottom-0 border  focus:outline-none my-3"
    //   onClick={() => setIsCommentsOpen(!isCommentsOpen)}
    // >
    <button className="text-xs font-bold text-white mt-2 w-full"
      onClick={() => setIsCommentsOpen(!isCommentsOpen)}
    >
      {isLoading && (
        <div className="flex justify-center py-4 items-center ">
          <PropagateLoader color={color} loading={isLoading} size={15} />
        </div>
      )}
      {!isLoading && (
        <div className=" transition-all duration-100">
          {isCommentsOpen ? (
            <div className="w-full justify-center items-center">
              <span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </span>
            </div>
          ) : (
            <div className=" p-1 flex items-center w-full justify-center">
              <span className="text-red-700 text-sm mx-1 font-medium">
                🚀 Best comments
              </span>
              <svg
                className="w-4 h-4 font-thin text-gray-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          )}
        </div>
      )}
    </button>
    // </div>
  );
}

export default ToggleComp;
