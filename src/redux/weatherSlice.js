import { createSlice } from "@reduxjs/toolkit";
import { API_KEY, OPEN_WEATHER_API_KEY } from "../helper/config";
const initialState = {
     searchCity: "",
     cityName: "",
     lat: "",
     long: "",
     noCityFound: true,
     cityListNames: false,
     timezone: "",
     weatherStandardUnitIcon: "°C",
     currentCityWeatherData: "",
     hourlyCityTempWeatherData: [],
     weeklyCityWeatherData: [],
};

const weatherSlice = createSlice({
     name: "weather",
     initialState,
     reducers: {
          updateSearchCity(state, actions) {
               state.searchCity = actions.payload;
          },
          updateCityListNames(state, actions) {
               state.cityListNames = actions.payload;
          },
          updateFromLocalStorage(state, actions) {
               state.cityName = actions.payload.cityName;
               state.lat = actions.payload.lat;
               state.long = actions.payload.long;
          },
          updateSearchSelectedCity(state, actions) {
               const { cityName, lat, long, timezone } = actions.payload;
               state.cityName = cityName;
               state.lat = lat;
               state.long = long;
               state.cityListNames = false;
               state.noCityFound = false;
               state.searchCity = "";
               state.timezone = timezone;
          },
          updateCityName(state, actions) {
               state.cityName = actions.payload;
          },
          updateCurrentCityWeatherData(state, actions) {
               state.currentCityWeatherData = actions.payload;
          },
          updateWeeklyCityWeatherData(state, actions) {
               state.weeklyCityWeatherData = actions.payload;
          },
          updateHourlyCityTempWeatherData(state, actions) {
               state.hourlyCityTempWeatherData = actions.payload;
          },
     },
});

export const weatherActions = weatherSlice.actions;

export default weatherSlice.reducer;
