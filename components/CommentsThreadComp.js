import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentsComp from "./CommentsComp";
import { motion, AnimatePresence } from "framer-motion"
import {
  useQuery,
} from '@tanstack/react-query'
import { getComments } from '../utils/api'
function CommentsThreadComp({ url, metadata, setIsLoading }) {
  // setIsLoading, isLoading,
  const baseURl = `https://www.reddit.com/${metadata?.permalink}.json`;
  // const isImage = metadata?.preview ? true : false;
  async function fetchComments() {
    const res = await fetch(
      baseURl
    );
    const data = await res.json();
    return data
  }
  const { data, isLoading } = useQuery(['comments'], fetchComments)
  useEffect(() => {
    setIsLoading(isLoading)
  }, [isLoading])
  return (
    <>
      <motion.div>
        <AnimatePresence mode='wait'>
          {!isLoading ? (
            <motion.div className="w-full"
              initial={{
                height: 0,
              }}
              animate={{
                height: "auto",
                transition: {
                  height: {
                    duration: 0.1,
                    type: 'keyframes'
                  },

                },
              }}
            >
              <CommentsComp comments={data[1]} />
            </motion.div>
          )
            :
            <div>
              Loading Comments...
            </div>
          }
        </AnimatePresence>
      </motion.div>
    </>
  );
}

export default CommentsThreadComp;
