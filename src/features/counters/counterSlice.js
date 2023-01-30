import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
});

export const {} = moviesSlice.actions;

export default moviesSlice.reducer;
