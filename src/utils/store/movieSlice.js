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
        }
    }
})

export const {addNowPlayingMovie, addPopularMovie, addTopRatedMovie, addUpcomingMovie } = movieSlice.actions;

export default movieSlice.reducer;