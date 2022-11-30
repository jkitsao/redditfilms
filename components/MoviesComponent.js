import React from "react";
import { useEffect } from "react";
import MovieThreadComponent from "./ThreadComponent";
function MoviesComponent({ data }) {
  //to remove first pinned threads
  const newData = data.splice(0, 2);
  useEffect(() => {
    console.log({ newData: data });
  }, [data]);
  return (
    <div className="w-full sm:w-4/5 md:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto">
      {data.map((thread, index) => (
        <div className="mb-3" key={index}>
          <MovieThreadComponent thread={thread} />
        </div>
      ))}
    </div>
  );
}

export default MoviesComponent;
