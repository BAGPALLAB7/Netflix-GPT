import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: "language",
    initialState: {
        currentLanguage: "en",
    },
    reducers: {
        changeLang: (state, action) => {
            state.currentLanguage = action.payload;
        }
    }
})

export const {changeLang} = languageSlice.actions;
export default languageSlice.reducer;