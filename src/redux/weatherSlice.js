import { createSlice } from "@reduxjs/toolkit";
import { API_KEY } from "../helper/config";
const initialState = {
     searchCity: "",
     cityName: "",
     lat: "",
     long: "",
     noCityFound: true,
     cityListNames: false,
     timezone: "",
     weatherStandardUnit: "metric",
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
          updateSearchCityDetails(state, actions) {
               // state.searchCity = actions.payload;
          },
          updateCityListNames(state, actions) {
               state.cityListNames = actions.payload;
          },
          updateSearchSelectedCity(state, actions) {
               const { cityName, lat, long, timezone } = actions.payload;
               console.log(cityName, lat, long);
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

export const callCurrentWeatherApi = (cityName) => {
     return async (dispatch) => {
          const fetchApi = async () => {
               const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}`;
               const currentCityWeatherResponse = await fetch(URL);
               const result = await currentCityWeatherResponse.json();
               // console.log("dailyWeatherData", result.current);
               const { feelslike_c, humidity, temp_c, wind_kph, uv } = result.current;
               dispatch(weatherActions.updateCurrentCityWeatherData({ humidity: humidity, temp: temp_c, uv: uv, wind: wind_kph, feel: feelslike_c }));
          };
          await fetchApi();
     };
};
export const callWeeklyWeatherApi = (lat, long, timezone) => {
     return async (dispatch) => {
          const fetchApi = async () => {
               const URL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`;
               const weeklyCityWeatherResponse = await fetch(URL);
               const result = await weeklyCityWeatherResponse.json();
               const time = result.daily.time;
               const tempMax = result.daily.temperature_2m_max;
               const tempMin = result.daily.temperature_2m_min;
               const weatherCode = result.daily.weathercode;
               const resultData = [];
               const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
               for (let i = 0; i < time.length; i++) {
                    const day = new Date(time[i]).getDay();
                    const data = {
                         id: time[i],
                         tempMax: tempMax[i],
                         tempMin: tempMin[i],
                         day: i == 0 ? "Today" : days[day],
                         weathercode: weatherCode[i],
                    };
                    resultData.push(data);
               }

               dispatch(weatherActions.updateWeeklyCityWeatherData(resultData));
          };
          await fetchApi();
     };
};
export const callHourlyWeatherApi = (lat, long) => {
     return async (dispatch) => {
          const fetchApi = async () => {
               const URL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m&current_weather=true`;
               const weeklyCityWeatherResponse = await fetch(URL);
               const result = await weeklyCityWeatherResponse.json();
               const time = result.hourly.time.slice(0, 24);
               const temp = result.hourly.temperature_2m.slice(0, 24);
               let data = [];
               // console.log(time);
               for (let i = 0; i < temp.length; i++) {
                    const localTime = new Date(time[i]).toLocaleTimeString();
                    let times;
                    if (localTime.length % 2 == 0) {
                         times = localTime.slice(0, 4) + localTime.slice(7);
                    } else {
                         times = localTime.slice(0, 5) + localTime.slice(8);
                    }
                    let item = {
                         id: i,
                         time: times,
                         temp: temp[i],
                    };

                    data.push(item);
               }
               dispatch(weatherActions.updateHourlyCityTempWeatherData(data));
          };
          await fetchApi();
     };
};

export const citySearchApi = (cityName) => {
     return async (dispatch) => {
          const fetchApi = async (name) => {
               const URL = `https://geocoding-api.open-meteo.com/v1/search?name=${name}`;
               const Response = await fetch(URL);
               const cityList = await Response.json();
               console.log("citySearchResult", cityList.results);
               if (cityList.results) {
                    dispatch(weatherActions.updateCityListNames(cityList.results));
               } else {
                    dispatch(weatherActions.updateCityListNames(false));
               }
          };
          await fetchApi(cityName);
     };
};

export const weatherActions = weatherSlice.actions;

export default weatherSlice.reducer;
