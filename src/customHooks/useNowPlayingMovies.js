import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constaints";
import { addNowPlayingMovie } from "../utils/store/movieSlice";
import { useEffect } from "react";

const useNowPlayngMovies = () =>{
    const dispatch = useDispatch();
  const fetchMovie = async () =>{
    const jsonData = await fetch('https://api.themoviedb.org/3/movie/now_playing',API_OPTION)
    const movieData =  await jsonData.json();
    console.log("now playing movie list",movieData);
    dispatch(addNowPlayingMovie((movieData.results)));
  }
  useEffect(()=>{
fetchMovie();
  },[])
  
}
export default useNowPlayngMovies;