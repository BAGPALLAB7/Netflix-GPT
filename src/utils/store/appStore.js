import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import GptReducer from "./gptSlice";
import languageReducer from "./languageSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    showGPT: GptReducer,
    changeLanguage: languageReducer,
  },
});

export default appStore;
