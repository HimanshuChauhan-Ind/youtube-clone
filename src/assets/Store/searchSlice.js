import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    setSearchData: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { setSearchData } = searchSlice.actions;

export default searchSlice.reducer;
