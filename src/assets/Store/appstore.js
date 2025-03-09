import { configureStore } from "@reduxjs/toolkit";
import appconfigSlice from "./appconfig";
import searchSlice from "./searchSlice";

const appstore = configureStore({
  reducer: { appconfig: appconfigSlice, search: searchSlice },
});

export default appstore;
