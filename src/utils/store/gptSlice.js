import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "searchGPT",
    initialState: {
        showSearchGPT: false,
        namesOfMovie: null,
        movieResults: null,
        
    },
    reducers: {
        toggleGPTSearch: (state, action ) =>{
            state.showSearchGPT = !(state.showSearchGPT)
        },
        addGptMovieResults: (state, action) => {
            const {movieName, movieResults} = action.payload;
            state.movieResults = movieResults;
            state.namesOfMovie = movieName;
        },
        removeGPTResults: (state) => {
            state.showSearchGPT = false;
            state.movieResults = null;
            state.namesOfMovie = null;
        },
        
    }
})


export const {toggleGPTSearch, addGptMovieResults, removeGPTResults, addALlRelatedMovies} = gptSlice.actions;
export default gptSlice.reducer;