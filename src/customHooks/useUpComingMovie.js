import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constaints";
import { addUpcomingMovie } from "../utils/store/movieSlice";
import { useEffect } from "react";

const useUpComingMovie = () =>{
    const dispatch = useDispatch();
  const fetchMovie = async () =>{
    const jsonData = await fetch('https://api.themoviedb.org/3/movie/upcoming',API_OPTION)
    const movieData =  await jsonData.json();
    //console.log("now playing movie list",movieData);
    dispatch(addUpcomingMovie((movieData.results)));
  }
  useEffect(()=>{
fetchMovie();
  },[])
  
}
export default useUpComingMovie;