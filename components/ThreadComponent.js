import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import CommentsThreadComp from "./CommentsThreadComp";
// import { Anchorme } from "react-anchorme";
import ReactMarkdown from "react-markdown";
import parse from "html-react-parser";
import { motion } from "framer-motion";
import ToggleComp from "./ToggleComp";
function MovieThreadComponent({ thread }) {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [path, setPath] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isImage = thread?.data?.preview ? true : false;

  const router = useRouter();
  const { asPath } = router;
  //set path base on current path
  useEffect(() => {
    if (asPath === "/") setPath("movies");
    if (asPath === "/television") setPath("television");
    if (asPath === "/forum") setPath("forum");
  }, [asPath]);
  return (
    <div className="bg-gray-800  m-2 select-none shadow-md flex justify-between  py-3 rounded cursor-pointer  transition-all duration-150 ease-linear thread_div whitespace-pre-wrap relative ">
      <div className=" mb-3">
        <div className="flex items-center justify-between mb-2 p-2">
          <span className="text-sm text-green-400 font-semibold">
            {thread?.data?.author}
          </span>
          <div className=" text-gray-50 cursor-not-allowed   absolute right-0  rounded opacity-50 max-h-16 ml-3">
            <div className="  text-xs font-semibold p-2">
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
        <div className="px-2  mt-5 shadow-inner">
          <span className="font-semibold block text-gray-200 text-xl my-2">
            {thread?.data?.title}
          </span>
        </div>
        <div className="my-3 pb-3 text-gray-400 prose prose-a:text-blue-400 prose-strong:text-green-400 hover:prose-a:text-blue-200 hover:prose-strong:text-green-200 transition-all duration-75 p-2">
          <ReactMarkdown>{thread?.data?.selftext}</ReactMarkdown>
        </div>
        {isImage && (
          <div className=" border-gray-500">
            <img src={thread?.data?.url} alt="" className="" />
          </div>
        )}

        {isCommentsOpen && (
          <motion.div>
            <CommentsThreadComp
              url={thread?.data?.url}
              setIsLoading={setIsLoading}
              isLoading={isLoading}
              data={thread?.data}
            />
          </motion.div>
        )}
      </div>
      <ToggleComp
        setIsCommentsOpen={setIsCommentsOpen}
        isCommentsOpen={isCommentsOpen}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
      />
    </div>
  );
}

export default MovieThreadComponent;
