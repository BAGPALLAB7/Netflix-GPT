import React, { useEffect } from "react";

import Header from "./Header";

import VideoComponent from "./VideoComponent";
import ShowTitle from "./ShowTitle";
import MovieList from "./MovieList";
import { API_OPTION } from "../utils/constaints";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovie } from "../utils/store/movieSlice";
import useNowPlayngMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GPT/GptSearch";

const Mainpage = () => {
  const showGPT = useSelector((store) => store.showGPT.showSearchGPT);
  useNowPlayngMovies();

  return (
    <div>
      <Header />
      {showGPT ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Mainpage;
