import React from "react";
import { useEffect } from "react";
import MovieThreadComponent from "./ThreadComponent";
function MoviesComponent({ data }) {
  //to remove first pinned threads
  const newData = data.splice(0, 2);
  // useEffect(() => {
  //   console.log({ newData: data });
  // }, [data]);
  return (
    <div className="w-full lg:w-2/5 lg:mx-auto overflow-x-hidden">
      {data.map((thread, index) => (
        <MovieThreadComponent key={index} thread={thread} />
      ))}
    </div>
  );
}

export default MoviesComponent;
