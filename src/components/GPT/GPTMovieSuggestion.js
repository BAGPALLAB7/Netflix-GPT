import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../MovieList";

const GPTMovieSuggestion = () => {
  const { namesOfMovie, movieResults, allRelatedMovies } = useSelector((store) => store.showGPT);

  console.log(namesOfMovie, movieResults);
  return (
    <div className="bg-black bg-opacity-80 m-5">
      {namesOfMovie &&
        namesOfMovie.map((name, index) => (
          <MovieList key={name} title={name} movies={movieResults[index]} />
        ))}
    </div>
  );
};

export default GPTMovieSuggestion;
