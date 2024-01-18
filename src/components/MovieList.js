import React from "react";
import { IMG_URL } from "../utils/constaints";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-3 bg-transparent">
      <div >
        <h1 className="text-2xl text-white p-2 ">{title}</h1>
        <div className="flex overflow-x-auto ">
          {movies &&
            movies.map((movie) => {
              return (
                <img className=" w-72 h-80 m-2" src={IMG_URL + movie?.poster_path} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
