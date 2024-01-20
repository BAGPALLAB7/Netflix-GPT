//added to git ignore

export const API_OPTION ={
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+  process.env.REACT_APP_API_OPTION,
  },
};

export const VIDEO_URL = "https://api.themoviedb.org/3/movie/";
export const YOUTUBE_URL = "https://www.youtube-nocookie.com/embed/";
export const IMG_URL = "https://image.tmdb.org/t/p/w200";
export const BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_medium.jpg";
export const LANG_OPT = [{identifer: "en", name: "English"},{identifer: "hi", name: "Hindi"},{identifer: "beng", name: "Bengali"}]

export const OPEN_API = process.env.REACT_APP_OPEN_API;

export const MOVIE_API = 'https://api.themoviedb.org/3/search/movie?query=';