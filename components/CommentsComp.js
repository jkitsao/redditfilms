import React, { useEffect } from "react";
import { Anchorme } from "react-anchorme";
// import parse from "html-react-parser";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";

import TMDB from "./TMDB";
function CommentsComp({ comments }) {
  const router = useRouter();
  const { asPath } = router;
  return (
    <div
      className="overflow-y-auto mb-5 bg-gray-900 shadow-xl"
      id="style-4"
      style={{
        maxHeight: "400px",
      }}
    >
      {comments?.data?.children &&
        comments?.data?.children.map((comment, index) => (
          <div
            key={index}
            className=" text-gray-100  bg-black bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-800 shadow-lg  rounded p-3 m-3 "
          >
            <div className="text-blue-400 text-xs font-mono">
              {comment?.data?.author}
            </div>
            <div className="prose prose-sm  prose-a:text-blue-400 prose-strong:text-green-400 hover:prose-a:text-blue-200 hover:prose-strong:text-green-200 transition-all duration-75 text-gray-300 ">
              <Anchorme target="_blank" rel="noreferrer noopener">
                <ReactMarkdown>{comment?.data?.body}</ReactMarkdown>
              </Anchorme>
            </div>
            {asPath !== "/forum" && (
              <div>
                {comment?.data?.body && comment?.data?.body.length < 200 && (
                  <TMDB query={comment?.data?.body} />
                )}
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

export default CommentsComp;
