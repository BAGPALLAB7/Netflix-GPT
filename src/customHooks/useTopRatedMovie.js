import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constaints";
import { addTopRatedMovie } from "../utils/store/movieSlice";
import { useEffect } from "react";

const useTopRatedMovie = () =>{
    const dispatch = useDispatch();
  const fetchMovie = async () =>{
    const jsonData = await fetch('https://api.themoviedb.org/3/movie/top_rated',API_OPTION)
    const movieData =  await jsonData.json();
    console.log("now playing movie list",movieData);
    dispatch(addTopRatedMovie((movieData.results)));
  }
  useEffect(()=>{
fetchMovie();
  },[])
  
}
export default useTopRatedMovie;