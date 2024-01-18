import React, { useEffect } from "react";

import Header from "./Header";

import VideoComponent from "./VideoComponent";
import ShowTitle from "./ShowTitle";
import MovieList from "./MovieList";
import { API_OPTION } from "../utils/constaints";
import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../utils/store/movieSlice";
import useNowPlayngMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Mainpage = () => {
  useNowPlayngMovies();
  
  return (
    <div>
      <Header />
      
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Mainpage;
