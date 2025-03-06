import { configureStore } from "@reduxjs/toolkit";
import appconfigSlice from "./appconfig";

const appstore = configureStore({
  reducer: { appconfig: appconfigSlice },
});

export default appstore;
