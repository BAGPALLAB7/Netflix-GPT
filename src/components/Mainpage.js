import React, { useEffect } from "react";

import Header from "./Header";

import {  useSelector } from "react-redux";
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
