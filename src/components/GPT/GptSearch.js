import React, { useRef } from "react";
import { API_OPTION, BG_IMG, MOVIE_API } from "../../utils/constaints";
import { languageConfig } from "../../utils/languageConfig";
import { useDispatch, useSelector } from "react-redux";
import openApi from "../../utils/OpenApi";
import { addGptMovieResults } from "../../utils/store/gptSlice";
import GPTMovieSuggestion from "./GPTMovieSuggestion";

const GptSearch = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const searchMovieFromGPTResultes = async (movie) => {
    console.log("Movie name before trim", movie);
    const tmdbMovie = await fetch(MOVIE_API + movie, API_OPTION);
    const jsonMovie = await tmdbMovie.json();
    console.log("TMDB movie results: ", jsonMovie);
    const exactMovie = jsonMovie?.results.filter(
      (m) => m.title.toLowerCase() == movie
    );
    console.log("exect movie:", exactMovie);
    return exactMovie;
  };

  const handleGptSearch = async () => {
    console.log(searchText.current.value);
    const GPTQuery =
      "act as a movie recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". suggest me only five movie full original name and give me the movie names with comma separated. Please give me the output in this format like the example given : Don,3 Idiots,Gadar,Sholay,Tare Zameen Par";

    const gptResultes = await openApi.chat.completions.create({
      messages: [{ role: "user", content: GPTQuery }],
      model: "gpt-3.5-turbo",
    });

    console.log(gptResultes.choices);
    const GPTResultsArray =
      gptResultes?.choices[0]?.message?.content.split(",");
    console.log("results after spliting", GPTResultsArray);
    let trimGPTResults = GPTResultsArray?.map((name) => {
      return name.trim().toLowerCase();
    });
    const promisArray = trimGPTResults.map((movie) =>
      searchMovieFromGPTResultes(movie)
    );
    console.log("promiss array:", promisArray);
    const finalMovies = await Promise.all(promisArray);
    console.log("final movies", finalMovies);
    dispatch(
      addGptMovieResults({
        movieName: GPTResultsArray,
        movieResults: finalMovies,
      })
    );
  };
  const languageKey = useSelector(
    (store) => store.changeLanguage.currentLanguage
  );
  return (
    <div className="">
      <div className="fixed w-screen -z-10">
        <img className="h-screen object-cover md:w-screen" src={BG_IMG} alt="background" />
      </div>
      <form className="pt-48 w-full flex justify-center" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          placeholder={languageConfig[languageKey].placeHolder}
          className="border-black md:border-2 w-full ml-4 mr-2 md:w-5/12 md:p-4 p-1"
        />
        <button
          type="button"
          className="mr-4 md:mx-4 text-white z-10 bg-red-500 px-3 md:px-8 rounded-sm"
          onClick={handleGptSearch}
        >
          {languageConfig[languageKey].search}
        </button>
      </form>
      <GPTMovieSuggestion />
    </div>
  );
};

export default GptSearch;
