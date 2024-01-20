import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        nowPlaying: null,
        popular: null,
        topRated: null,
        upComing: null,
    },
    reducers: {
        addNowPlayingMovie: (state, action) =>{
            
                state.nowPlaying = action.payload;
            
        },
        addPopularMovie: (state, action) =>{
            state.popular = action.payload;
        },
        addTopRatedMovie: (state, action) =>{
            state.topRated = action.payload;
        },
        addUpcomingMovie: (state, action) =>{
            state.upComing = action.payload;
        },
        removeAllMovies: (state) =>{
            state.nowPlaying = null;
            state.popular = null;
            state.topRated = null;
            state.upComing = null;
        }
    }
})

export const {addNowPlayingMovie, addPopularMovie, addTopRatedMovie, addUpcomingMovie , removeAllMovies} = movieSlice.actions;

export default movieSlice.reducer;