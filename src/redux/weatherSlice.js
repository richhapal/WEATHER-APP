import { createSlice } from "@reduxjs/toolkit";
import { API_KEY } from "../helper/config";
const initialState = {
     cityName: "",
     lat: "26.23",
     long: "73.02",
     enterCityName: "",
     weatherStandardUnit: "metric",
     weatherStandardUnitIcon: "°C",
     currentCityWeatherData: "",
     // hourlyCityTimeWeatherData: "",
     hourlyCityTempWeatherData: "",
     weeklyCityWeatherData: "",
};

const weatherSlice = createSlice({
     name: "weather",
     initialState,
     reducers: {
          updateCityName(state, actions) {
               state.cityName = actions.payload;
          },
          updateCurrentCityWeatherData(state, actions) {
               state.currentCityWeatherData = actions.payload;
          },
          updateWeeklyCityWeatherData(state, actions) {
               state.weeklyCityWeatherData = actions.payload;
          },
          // updateHourlyCityTimeWeatherData(state, actions) {
          //      state.hourlyCityTimeWeatherData = actions.payload;
          // },
          updateHourlyCityTempWeatherData(state, actions) {
               state.hourlyCityTempWeatherData = actions.payload;
          },
     },
});

export const callCurrentWeatherApi = (lat, long) => {
     return async (dispatch) => {
          const fetchApi = async () => {
               const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
               const currentCityWeatherResponse = await fetch(URL);
               const result = await currentCityWeatherResponse.json();
               dispatch(weatherActions.updateCurrentCityWeatherData(result));
          };
          await fetchApi();
     };
};
export const callWeeklyWeatherApi = (cityName) => {
     return async (dispatch) => {
          const fetchApi = async () => {
               const URL = `https://api.tomorrow.io/v4/weather/forecast?location=${cityName}&timesteps=1d&apikey=${API_KEY}`;
               const weeklyCityWeatherResponse = await fetch(URL);
               const result = await weeklyCityWeatherResponse.json();
               // console.log("result", result);
               // dispatch(weatherActions.updateWeeklyCityWeatherData(result.timelines.daily));
          };
          await fetchApi();
     };
};
export const callHourlyWeatherApi = (lat, long) => {
     return async (dispatch) => {
          const fetchApi = async () => {
               const URL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m&current_weather=true`;
               const weeklyCityWeatherResponse = await fetch(URL);
               // console.log(weeklyCityWeatherResponse);
               const result = await weeklyCityWeatherResponse.json();
               const time = result.hourly.time.slice(0, 24);
               const temp = result.hourly.temperature_2m.slice(0, 24);
               dispatch(weatherActions.updateHourlyCityTempWeatherData(temp));
               // dispatch(weatherActions.updateHourlyCityTimeWeatherData(time));
          };
          await fetchApi();
     };
};

export const weatherActions = weatherSlice.actions;

export default weatherSlice.reducer;
