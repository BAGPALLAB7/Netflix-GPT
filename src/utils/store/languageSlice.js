import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: "language",
    initialState: {
        currentLanguage: "en",
    },
    reducers: {
        changeLang: (state, action) => {
            state.currentLanguage = action.payload;
        },
        removeLanguage: (state) => {
            state.currentLanguage = "en"
        }
    }
})

export const {changeLang, removeLanguage} = languageSlice.actions;
export default languageSlice.reducer;