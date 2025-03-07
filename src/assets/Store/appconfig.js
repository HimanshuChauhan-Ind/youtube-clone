import { createSlice } from "@reduxjs/toolkit";

const appconfigSlice = createSlice({
  name: "appconfig",
  initialState: {
    showSidebar: true,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.showSidebar = !state.showSidebar;
    },
    closeSidebar: (state) => {
      state.showSidebar = false;
    },
  },
});

export const { toggleSidebar, closeSidebar } = appconfigSlice.actions;

export default appconfigSlice.reducer;
