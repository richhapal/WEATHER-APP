import { createSlice } from "@reduxjs/toolkit";
import { API_KEY } from "../helper/config";
const initialState = {
     searchCity: "",
     cityName: "",
     lat: "",
     long: "",
     cityListNames: false,
     weatherStandardUnit: "metric",
     weatherStandardUnitIcon: "°C",
     currentCityWeatherData: "",
     hourlyCityTempWeatherData: [],
     weeklyCityWeatherData: "",
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

export const callCurrentWeatherApi = (lat, long) => {
     return async (dispatch) => {
          const fetchApi = async () => {
               // const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
               // const currentCityWeatherResponse = await fetch(URL);
               // const result = await currentCityWeatherResponse.json();
               // dispatch(weatherActions.updateCurrentCityWeatherData(result));
          };
          await fetchApi();
     };
};
export const callWeeklyWeatherApi = (cityName) => {
     return async (dispatch) => {
          const fetchApi = async () => {
               // const URL = `https://api.tomorrow.io/v4/weather/forecast?location=${cityName}&timesteps=1d&apikey=${API_KEY}`;
               // const weeklyCityWeatherResponse = await fetch(URL);
               // const result = await weeklyCityWeatherResponse.json();
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

               // console.log(data);

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
               dispatch(weatherActions.updateCityListNames(cityList.results));
          };
          await fetchApi(cityName);
     };
};

export const weatherActions = weatherSlice.actions;

export default weatherSlice.reducer;
