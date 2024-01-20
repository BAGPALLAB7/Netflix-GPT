import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constaints";
import { addPopularMovie } from "../utils/store/movieSlice";
import { useEffect } from "react";

const usePopularMovie = () =>{
    const dispatch = useDispatch();
  const fetchMovie = async () =>{
    const jsonData = await fetch('https://api.themoviedb.org/3/movie/popular',API_OPTION)
    const movieData =  await jsonData.json();
    //console.log("popular movie list",movieData);
    dispatch(addPopularMovie((movieData.results)));
  }
  useEffect(()=>{
fetchMovie();
  },[])
  
}
export default usePopularMovie;