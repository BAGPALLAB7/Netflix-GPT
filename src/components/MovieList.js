import React from "react";
import { IMG_URL } from "../utils/constaints";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-3 bg-transparent z-50">
      <div >
        <h1 className="text-lg md:text-2xl text-white p-2 z-50">{title}</h1>
        <div className="flex overflow-x-auto ">
          {movies &&
            movies.map((movie) => {
              if(movie?.poster_path)
              return (
                movie?.poster_path && 
                <img className="w-36 h-44 md:w-72 md:h-80 m-2 z-50" src={IMG_URL + movie?.poster_path} />
              
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
