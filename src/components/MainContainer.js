import React from "react";
import { useSelector } from "react-redux";
import VideoComponent from "./VideoComponent";
import ShowTitle from "./ShowTitle";

const MainContainer = () => {
  const movie = useSelector((store) => store.movies?.nowPlaying);
  if (!movie) {
    return;
  }
  const firstMovie = movie[0];
  const { id, title, overview } = firstMovie;
  return (
    <div className="">
      <VideoComponent movieId={id} />
      <ShowTitle title={title} overview={overview} />
    </div>
  );
};

export default MainContainer;
