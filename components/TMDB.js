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
  // const []
  const a = query.replace(/ *\([^)]*\) */g, "");
  const b = a.replace(/\[^\]+$/, "");
  const router = useRouter();
  const queryMovieURL = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${b}`;
  const queryTvUrl = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${b}`;
  //setting the base url
  const url =
    router.asPath === "/" || router.asPath === "/movies"
      ? queryMovieURL
      : queryTvUrl;

  const fetchMovieInfo = () => setIsLoading(true);
  axios
    .get(url)
    .then((response) => {
      // console.log(response.data);
      setMovies(response.data);
      setIsLoading(false);
    })
    .catch((error) => {
      console.error(error);
      setIsLoading(false);
    });

  const handleClick = () => {
    fetchMovieInfo();
    onOpen();
  };

  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <button
        onClick={() => handleClick()}
        className=" text-yellow-400  text-xs hover:underline bg-slate-800 hover:bg-slate-900 p-2  my-2 cursor-pointer rounded transition-all duration-200"
      >
        movie information
      </button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="4xl"
        bg="gray.700"
        scrollBehavior="inside"
        id="style-4"
        blockScrollOnMount={false}
      >
        <ModalOverlay />
        <ModalContent bg="gray.800">
          <ModalHeader color="yellow.300">
            {query || "title goes here"}
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
                    <div>
                      <MovieComp movie={movie} />
                    </div>
                  ))}
                {movies.total_results < 1 && (
                  <div className="flex justify-center">
                    <div className="text-center">
                      <img
                        src="https://i.gifer.com/origin/50/5080c448c4a2664c271bd1c5e7593c6d_w200.gif"
                        className="w-full object-cover"
                      />
                      <div className="text-lg text-red-500 p-2">
                        `{b}` not found
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            {/* <div className="text-white text-xs">{JSON.stringify(movies)}</div> */}
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
  return (
    <div className=" lg:flex my-2 p-2 lg:border lg:border-gray-600 bg-gray-900 transition-all duration-150 ease-linear cursor-pointer rounded-md">
      <div className="lg:w-1/3">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie?.poster_path}`
              : "https://via.placeholder.com/480x480.png?text=no+image+found"
          }
          className=" object-cover w-full"
          style={{
            height: "400px",
            width: "400px",
          }}
        />
      </div>
      {/* <hr /> */}
      <div
        className="lg:w-2/3 lg:p-3 shadow-inner overflow-hidden"
        style={{
          maxHeight: "250px",
        }}
      >
        <div className="  text-xl font-semibold py-1 text-red-400 ">
          <span>{movie?.original_title || movie?.original_name}</span>
        </div>
        <div className="  py-1 text-red-400 ">
          <span className=" inline-block mx-1.5 text-green-300 font-normal text-sm">
            {movie?.release_date &&
              format(new Date(movie?.release_date), "do MMMM Y")}
          </span>
        </div>
        <div className=" text-gray-300 px-2 text-sm lg:w-4/5 ">
          <span>{movie?.overview}</span>
        </div>
      </div>
    </div>
  );
}

export default TMDB;
