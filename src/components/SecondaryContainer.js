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
    <div className="bg-black pt-[500px] md:pt-[650px]  text-white">
      <div className="   bg-transparent mt-0 pl-5">
        <MovieList title="Now Playing" movies={movieData?.nowPlaying} />
        <MovieList title="Popular" movies={movieData?.popular} />
        <MovieList title="Top Rated" movies={movieData?.topRated} />
        <MovieList title="Upcoming" movies={movieData?.upComing} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
