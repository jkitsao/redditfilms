import React,{useState} from "react";
import SyncLoader from "react-spinners/SyncLoader";

function ToggleComp({ setIsCommentsOpen, isCommentsOpen,setIsLoading,isLoading }) {
  let [color, setColor] = useState("#ffffff");

  return (
    <div
      className="w-full flex justify-center items-center mt-5 py-2 lg:py-3 bg-cyan-900 absolute bottom-0  focus:outline-none focus:ring focus:ring-violet-300 border-green-400"
      onClick={() => setIsCommentsOpen(!isCommentsOpen)}
    >
      <button className="text-xs font-bold text-white">
       {isLoading && (
        <div className="flex justify-center  items-center ">
          <SyncLoader color={color} loading={isLoading} size={10} />
        </div>
      )}
        {!isLoading && <div className=" transition-all duration-100">
          {isCommentsOpen ? (
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
          ) : (
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          )}
        </div>}
      </button>
    </div>
  );
}

export default ToggleComp;
