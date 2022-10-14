import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import format from "date-fns/format";
import CommentsComp from "./CommentsComp";
import BounceLoader from "react-spinners/BounceLoader";
const api_key = process.env.NEXT_PUBLIC_TMDB_KEY;

function TMDB({ query }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");
  let [queryIndex, setQueryIndex] = useState(0);
  // remove values inside ()
  const a = query.replace(/ *\([^)]*\) */g, "");
  //get values before a comma
  // const b = a.replace(/,[^,]+$/, "");
  //check for line breaks
  let query_values = [];
  let line_values = [];
  let coma_values = []
  //check for strings separated by coma and push that to array
  if (a.includes(',')) {
    coma_values = a.split(",").filter(function (el) {
      return el != "";
    });
  }
  //check for strings separated by line and push that to array
  const line = (a.match(/\n/g) || []).length;
  if (line > 0) {
    line_values = a.split("\n").filter(function (el) {
      return el != "";
    });
  }
  //construct query param
  const query_param_init = () => {
    query_values = line_values.concat(coma_values)
    if (query_values.length < 1) return a;
    return query_values[queryIndex];
  };
  const query_param = query_param_init();

  const router = useRouter();
  const queryMovieURL = `https://api.themoviedb.org/3/search/multi?api_key=${api_key}&query=${query_param}`;
  const queryTvUrl = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${query_param}`;
  //setting the base url
  const url =
    router.asPath === "/" || router.asPath === "/movies"
      ? queryMovieURL
      : queryTvUrl;
  //fetch movie/series info then open the modal
  const fetchMovieInfo = () => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        console.log({ movie_info: response.data });
        setMovies(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  const handleClick = () => {
    setQueryIndex(0);
    fetchMovieInfo();
    onOpen();
  };

  //next movie(line break mode)

  const handleNextMovieLineBreak = () => {
    if (queryIndex < query_values.length) {
      setQueryIndex(queryIndex + 1);
    }
  };
  useEffect(() => [fetchMovieInfo()], [queryIndex]);

  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <button
        onClick={() => handleClick()}
        className=" text-orange-300  text-xs hover:underline bg-slate-800 hover:bg-slate-900 p-2 flex items-center  my-2 cursor-pointer rounded transition-all duration-200"
      >
        <div>
          <img src='/assets/movie-icon.png' className=" inline-flex items-center w-5 h-5 mx-1" alt='about' />
          {router.asPath === "/tvshows" ? "series" : "movie"} information
        </div>
      </button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="2xl"
        bg="gray.700"
        scrollBehavior="inside"
        id="style-4"
      // blockScrollOnMount={false}
      >
        <ModalOverlay />
        <ModalContent bg="gray.800">
          <ModalHeader color="yellow.300">
            {/* {query_values.length < 1 && query} */}
            {query_values.length > 1 && query_values[queryIndex]}
          </ModalHeader>
          <ModalCloseButton color="gray.200" />
          <ModalBody>
            {isLoading && (
              <div className="w-full flex justify-center  items-center py-12">
                <BounceLoader color={color} loading={isLoading} size={50} />
              </div>
            )}
            {!isLoading && (
              <div className=" py-3 px-2">
                {movies.total_results > 0 &&
                  movies.results.map((movie) => (
                    <div className="mb-4">
                      <MovieComp movie={movie} />
                      {/* <hr className="text-gray-700" />  */}
                    </div>
                  ))}
                {movies.total_results < 1 && (
                  <div className="flex justify-center">
                    <div className="text-center">
                      <img
                        src="https://i.gifer.com/origin/50/5080c448c4a2664c271bd1c5e7593c6d_w200.gif"
                        className="w-full object-cover"
                      />
                      <div className="text-lg text-red-500 font-semibold p-2">
                        `{query_param}` not found
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            {queryIndex + 1 < query_values.length && (
              <ModalFooter>
                <button
                  className=" left-0   flex   justify-center items-center absolute bottom-0 text-green-300 mx-2 bg-gray-900 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300  rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700"
                  onClick={handleNextMovieLineBreak}
                >
                  <span>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                  <span className="mx-1">{query_values[queryIndex + 1]}</span>
                </button>
              </ModalFooter>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
// import React from 'react'
//original_title,overview,overview,popularity,original_language,poster_path

export function MovieComp({ movie }) {
  // const release_date = format(movie?.release_date, "MM/dd/yyyy");
  // console.log({ movie })
  return (
    <div className=" lg:flex my-2  p-2 transition-all duration-150 ease-linear cursor-pointer rounded-md">
      <div className=" bg-black">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie?.poster_path}`
              : "https://via.placeholder.com/480x480.png?text=File+Not+found"
          }
          className="modal_poster object-scale-down w-full"
          style={{
            maxHeight: "250px",
            maxWidth: "500px",
          }}
        />
      </div>
      {/* <hr /> */}
      <div
        className="lg:w-3/4 lg:p-3 shadow-inner overflow-x-hidden"
      >
        <div className=" px-2 text-xl title font-semibold py-1 text-red-400 ">
          <span>{movie?.original_title || movie?.original_name}</span>
        </div>
        <div className="  py-1 text-red-400 ">
          <span className=" inline-block mx-2 text-green-300 font-normal text-sm">
            {movie?.release_date ||
              (movie?.first_air_date &&
                format(new Date(movie?.first_air_date), "dd MMMM Y"))}
          </span>
        </div>
        <div className=" text-gray-300 px-2 text-sm lg:w-4/5 markdown_div">
          <span>{movie?.overview}</span>
        </div>
      </div>
    </div>
  );
}

export default TMDB;
