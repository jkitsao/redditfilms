import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentsComp from "./CommentsComp";
import { motion, AnimatePresence } from "framer-motion"
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
} from '@tanstack/react-query'
import { getComments } from '../utils/api'
function CommentsThreadComp({ url, setIsLoading, isLoading, metadata }) {
  const baseURl = `https://www.reddit.com/${metadata?.permalink}.json`;
  const isImage = metadata?.preview ? true : false;
  const [comments, setComments] = useState([]);
  let [color, setColor] = useState("#ffffff");
  useEffect(() => {
    (
      async function () {
        try {
          setIsLoading(true)
          const response = await axios.get(baseURl)
          if (response.data[1]) setComments(response.data[1]);
          setIsLoading(fale)
        }
        catch (error) {
          setIsLoading(false)
          console.error(error)
        }
      }
    )()
  }, []);
  return (
    <>
      <motion.div>
        <AnimatePresence mode='wait'>
          {!isLoading && (
            <motion.div className="w-full"
              initial={{
                height: 0,
              }}
              animate={{
                height: "auto",
                transition: {
                  height: {
                    duration: 0.15,
                  },

                },
              }}
            >
              <CommentsComp comments={comments} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

export default CommentsThreadComp;
