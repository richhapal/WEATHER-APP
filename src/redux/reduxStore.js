import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./weatherSlice";

const store = configureStore({
     reducer: {
          weatherReducer: weatherSlice,
     },
});

export default store;
