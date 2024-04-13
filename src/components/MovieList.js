import React from "react";
import { IMG_URL } from "../utils/constaints";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-3 bg-transparent">
        <h1 className="z-10 relative text-lg md:text-2xl text-white p-2">{title}</h1>
        <div className="flex overflow-x-auto ">
          {movies &&
            movies.map((movie) => {
              if(movie?.poster_path)
              return (
                movie?.poster_path && 
                <img className="w-36 h-44 md:w-72 md:h-80 m-2 z-10" src={IMG_URL + movie?.poster_path} />
              
              );
            })}
      </div>
    </div>
  );
};

export default MovieList;
