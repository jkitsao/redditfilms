import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import CommentsThreadComp from "./CommentsThreadComp";
// import { Anchorme } from "react-anchorme";
import ReactMarkdown from "react-markdown";
import parse from "html-react-parser";
import { motion, AnimatePresence } from "framer-motion"
import ToggleComp from "./ToggleComp";
import PreviewComp from "./PreviewComp";
import ProfileComp from "./ProfileComp";
import Player from "./Player";
import Upvote from "./Upvote";
function MovieThreadComponent({ thread }) {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [path, setPath] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isImage = thread?.data?.preview ? true : false;
  // const { hostname } = new URL(thread?.data?.url);

  function getLocation(href) {
    var match = href.match(
      /^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/
    );
    return (
      match && {
        href: href,
        protocol: match[1],
        host: match[2],
        hostname: match[3],
        port: match[4],
        pathname: match[5],
        search: match[6],
        hash: match[7],
      }
    );
  }
  // console.log(getLocation(thread?.data.url)?.hostname);
  const router = useRouter();
  const { asPath } = router;
  //set path base on current path
  useEffect(() => {
    if (asPath === "/") setPath("movies");
    if (asPath === "/television") setPath("television");
    if (asPath === "/forum") setPath("forum");
  }, [asPath]);

  const variants = {
    open: { opacity: 1, height: '100%' },
    closed: { opacity: 0, height: 0 },
    transition: { duration: 5 }
  }

  return (

    <div className="bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-70   pb-4 select-none shadow-md m-2 justify-between   rounded cursor-pointer  transition-all duration-150 ease-linear thread_div whitespace-pre-wrap relative ">
      <motion.div className=" mb-3"

      >
        <div className="flex items-center justify-between mb-2 p-2">
          <ProfileComp author={thread?.data?.author} />
          <Upvote thread={thread} />
        </div>
        <div className="px-2  mt-5 ">
          <span className=" block text-gray-300 text-xl  my-2 font-semibold title tracking-wide">
            {thread?.data?.title}
            {/* {getHostname(thread?.data.url)} */}
          </span>
        </div>
        {thread.data?.thumbnail &&
          getLocation(thread?.data.url)?.hostname !== "www.reddit.com" && (
            <PreviewComp
              data={thread?.data}
              hostname={getLocation(thread?.data.url)?.hostname}
            />
          )}
        {thread.data?.thumbnail &&
          getLocation(thread?.data.url)?.hostname == "youtu.be" && (
            <div>
              <Player id={getLocation(thread?.data.url)?.pathname.substring(1)} />
            </div>
          )}
        {thread?.data?.selftext && <div className="my-3 pb-2 markdown_div  text-gray-400 font-normal leading-snug prose prose-a:text-blue-400 prose-strong:text-green-400 prose-base hover:prose-a:text-blue-200 hover:prose-strong:text-green-200 transition-all duration-200 p-2">
          <ReactMarkdown>{thread?.data?.selftext}</ReactMarkdown>
        </div>}
        {isImage && (
          <div className="w-full my-3">
            <img src={thread?.data?.url} alt="" className="w-full" />
          </div>
        )}

        <AnimatePresence>
          {isCommentsOpen && (
            <motion.div className="my-2"
              exit={{
                height: 0,
                transition: {
                  height: {
                    duration: 0.07,
                    type: 'spring'
                  },
                },
              }}
            >
              <CommentsThreadComp
                url={thread?.data?.url}
                setIsLoading={setIsLoading}
                isLoading={isLoading}
                metadata={thread?.data}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <div className="">
        <ToggleComp
          setIsCommentsOpen={setIsCommentsOpen}
          isCommentsOpen={isCommentsOpen}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
        />
      </div>
    </div>

  );
}

export default MovieThreadComponent;
