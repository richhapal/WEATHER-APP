import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import weatherSlice from "./weatherSlice";
import ReduxThunk from "redux-thunk";

const store = configureStore(
     {
          reducer: {
               weatherReducer: weatherSlice,
          },
     },
     applyMiddleware(ReduxThunk)
);

export default store;
