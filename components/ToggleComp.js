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

    <button className="text-xs font-bold text-white  w-full "
      onClick={() => setIsCommentsOpen(!isCommentsOpen)}
    >
      {isLoading && (
        <div className="flex justify-center py-4 items-center ">
          <PropagateLoader color={color} loading={isLoading} size={15} />
        </div>
      )}
      {!isLoading && (
        <div className=" transition-all duration-100 w-full ">
          {isCommentsOpen ? (
            <div className="w-full flex justify-center items-center ">
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
            <div className=" p-1 text-gray-300 flex items-center w-full justify-center">
              <span className=" text-sm  font-medium">
                🚀 Best comments
              </span>
              <svg
                className="w-5 h-5 font-semibold "
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
