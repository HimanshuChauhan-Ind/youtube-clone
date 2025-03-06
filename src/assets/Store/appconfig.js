import { createSlice } from "@reduxjs/toolkit";

const appconfigSlice = createSlice({
  name: "appconfig",
  initialState: {
    showSidebar: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.showSidebar = !state.showSidebar;
    },
  },
});

export const { toggleSidebar } = appconfigSlice.actions;

export default appconfigSlice.reducer;
