import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "searchGPT",
    initialState: {
        showSearchGPT: false,
    },
    reducers: {
        toggleGPTSearch: (state, action ) =>{
            state.showSearchGPT = !(state.showSearchGPT)
        }
    }
})


export const {toggleGPTSearch} = gptSlice.actions;
export default gptSlice.reducer;