import React from "react";
import useTopRatedMovie from "../customHooks/useTopRatedMovie";
import useUpComingMovie from "../customHooks/useUpComingMovie";
import usePopularMovie from "../customHooks/usePopularMovie";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  usePopularMovie();
  useTopRatedMovie();
  useUpComingMovie();
  const movieData = useSelector((store) => store.movies);
  return (
    <div className="bg-black pt-32 md:pt-96 z-50 text-white">
    Secondary Container
      <div className=" md:-mt-56 pt-96 bg-transparent mt-0 pl-5 z-50">
        <MovieList title="Now Playing" movies={movieData?.nowPlaying} />
        <MovieList title="Popular" movies={movieData?.popular} />
        <MovieList title="Top Rated" movies={movieData?.topRated} />
        <MovieList title="Upcoming" movies={movieData?.upComing} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
