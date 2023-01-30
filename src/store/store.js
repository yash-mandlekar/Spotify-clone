import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "../features/counters/counterSlice";

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
  },
});
