import React, { useEffect, useState } from "react";
import { API_OPTION, VIDEO_URL, YOUTUBE_URL } from "../utils/constaints";

const VideoComponent = ({ movieId }) => {
  const [videoKey, setVideoKey] = useState(null);
  const getMovieTrailer = async () => {
    const jsonMovie = await fetch(VIDEO_URL + movieId + "/videos", API_OPTION);
    const movieTrailers = await jsonMovie.json();
    //console.log("movieTrailers", movieTrailers);
    let trailers = movieTrailers.results.filter(
      (movie) => movie.type == "Trailer"
    );
    setVideoKey(trailers[0]?.key);
    //console.log("Trailers:", trailers[0]);
  };
  //console.log("key", videoKey);

  useEffect(() => {
    getMovieTrailer();
  }, []);
  //{YPUTUBR_URL+videoKey+"?si=1i6GSWecov9sy_vs"}
  return (
    <div className="md:w-screen absolute pt-36 md:pt-0  ">
      <iframe
        className="w-screen aspect-video bg-black mb-40"
        
        src={YOUTUBE_URL + videoKey+"?autoplay=1&mute=1&showinfo=0&controls=0&loop=1&modestranding=1&playlist="+videoKey}
        
        allow="autoplay; fullscreen;"
      ></iframe>
    </div>
  );
};

export default VideoComponent;
