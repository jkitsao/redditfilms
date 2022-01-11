import React, { useState } from "react";
import axios from "axios";
import CommentsComp from "./CommentsComp";
// import { Loader } from "react-js-loader";
import SyncLoader from "react-spinners/SyncLoader";
function CommentsThreadComp({ url,setIsLoading,isLoading }) {
  const baseURl = `${url}.json`;
  const [comments, setComments] = useState([]);
  let [color, setColor] = useState("#ffffff");
  React.useEffect(() => {
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
  }, []);
  return (
    <div>
      
      {!isLoading && (
        <div className="w-full">
          <CommentsComp comments={comments} />
        </div>
      )}
    </div>
  );
}

export default CommentsThreadComp;
