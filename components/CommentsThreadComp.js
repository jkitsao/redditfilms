import React, { useState } from "react";
import axios from "axios";
import CommentsComp from "./CommentsComp";
// import { Loader } from "react-js-loader";
import SyncLoader from "react-spinners/SyncLoader";
function CommentsThreadComp({ url, setIsLoading, isLoading, data }) {
  const baseURl = `https://www.reddit.com/${data?.permalink}.json`;
  const isImage = data?.preview ? true : false;
  const [comments, setComments] = useState([]);
  let [color, setColor] = useState("#ffffff");
  React.useEffect(() => {
    console.log({ data });
    // if (!isImage) {
    setIsLoading(true);

    axios
      .get(baseURl)
      .then((response) => {
        console.log(response.data[1]);
        setComments(response.data[1]);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
      });
    // }
  }, []);
  return (
    <>
      {isImage && (
        <div className="pb-5">
          <img src={data?.url} alt="" className="" />
        </div>
      )}
      <div>
        {!isLoading && !isImage && (
          <div className="w-full">
            <CommentsComp comments={comments} />
          </div>
        )}
      </div>
    </>
  );
}

export default CommentsThreadComp;
