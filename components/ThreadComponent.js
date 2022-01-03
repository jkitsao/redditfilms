import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import CommentsThreadComp from "./CommentsThreadComp";
// import { Anchorme } from "react-anchorme";
import ReactMarkdown from "react-markdown";
import parse from "html-react-parser";
import { motion } from "framer-motion";
function MovieThreadComponent({ thread }) {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [path, setPath] = useState("");
  const router = useRouter();
  const { asPath } = router;
  //set path base on current path
  useEffect(() => {
    if (asPath === "/") setPath("movies");
    if (asPath === "/television") setPath("television");
    if (asPath === "/forum") setPath("forum");
  }, [asPath]);
  return (
    <div className="bg-gray-800 p-2 lg:p-3 m-2 select-none shadow-md flex justify-between  py-3 rounded cursor-pointer lg:border-l-4 border-red-400 hover:border-red-600 transition-all duration-150 ease-linear thread_div whitespace-pre-wrap relative ">
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-green-400 font-semibold">
            {thread?.data?.author}
          </span>
          <div className="flex items-center justify-center text-gray-300 cursor-not-allowed   absolute right-0  rounded opacity-50 max-h-16 ml-3">
            <div className="  text-xs font-semibold p-2  bg-gray-700 mt-3">
              <span className=" inline-flex justify-center items-center text-center">
                <svg
                  className="w-4 h-4"
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

              <span className="block text-center">{thread?.data?.ups}</span>
            </div>
          </div>
        </div>
        <div className="px-2 lg:w-5/6 mt-5">
          <span className="font-semibold block text-gray-200 text-xl my-2">
            {thread?.data?.title}
          </span>
        </div>
        <div className="my-2 text-gray-400 prose prose-a:text-blue-400 prose-strong:text-green-400 hover:prose-a:text-blue-200 hover:prose-strong:text-green-200 transition-all duration-75 p-2">
          <ReactMarkdown>{thread?.data?.selftext}</ReactMarkdown>
        </div>
        <div className="">
          <button
            className="text-xs text-yellow-400 p-3 bg-stone-700 rounded"
            onClick={() => setIsCommentsOpen(!isCommentsOpen)}
          >
            {path === "forum" ? (
              <>{isCommentsOpen ? "hide discussions" : " discussions"}</>
            ) : (
              <>
                {isCommentsOpen
                  ? "hide recommendations"
                  : "see recommendations"}
              </>
            )}
          </button>
        </div>
        {isCommentsOpen && (
          <motion.div>
            <CommentsThreadComp url={thread?.data?.url} />
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default MovieThreadComponent;
