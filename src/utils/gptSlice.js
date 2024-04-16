import {createSlice} from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSlice",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleShowGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },

    // Creating an action for two different objects
    addGptMoviesResult: (state, action) => {
      const {movieNames, movieResults} = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    }
  }
});

export const {toggleShowGptSearchView,
  addGptMoviesResult
} = gptSlice.actions;
export default gptSlice.reducer;