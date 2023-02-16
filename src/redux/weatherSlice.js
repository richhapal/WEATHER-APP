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
          try {
               const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}`;
               const currentCityWeatherResponse = await fetch(URL);
               const result = await currentCityWeatherResponse.json();
               console.log("current Weather Data", result.current);
               console.log("current Weather Data", result);
               const { feelslike_c, humidity, temp_c, wind_kph, uv, is_day } = result.current;
               dispatch(weatherActions.updateCurrentCityWeatherData({ humidity: humidity, temp: temp_c, uv: uv, wind: wind_kph, feel: feelslike_c, isDay: is_day }));
          } catch (err) {
               console.log(err);
          }
     };
};
export const callWeeklyWeatherApi = (lat, long, timezone) => {
     return async (dispatch) => {
          try {
               // https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min
               const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&&exclude=hourly,minutely&units=metric&appid=${OPEN_WEATHER_API_KEY}`;
               const weeklyCityWeatherResponse = await fetch(URL);
               const result = await weeklyCityWeatherResponse.json();
               console.log("weekly weather data", result);
               const data = result.daily;
               const resultData = [];
               const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
               for (let i = 0; i < 8; i++) {
                    let day = new Date(data[i].dt * 1000).getDay();
                    let dailyData = {
                         id: data[i].dt,
                         tempMax: data[i].temp.max,
                         tempMin: data[i].temp.min,
                         day: i == 0 ? "Today" : days[day],
                         condition: data[i].weather[0].main,
                         icon: data[i].weather[0].icon + ".png",
                    };
                    resultData.push(dailyData);
                    // console.log("condition", data[i].weather[0].main);
               }
               // console.log("condition");
               dispatch(weatherActions.updateWeeklyCityWeatherData(resultData));
          } catch (error) {
               console.log(error);
          }
     };
};
export const callHourlyWeatherApi = (lat, long) => {
     return async (dispatch) => {
          try {
               const URL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m&current_weather=true`;
               const weeklyCityWeatherResponse = await fetch(URL);
               const result = await weeklyCityWeatherResponse.json();
               console.log("hourly weather data", result);
               const time = [...result.hourly.time.slice(0, 24)];
               const temp = [...result.hourly.temperature_2m.slice(0, 24)];
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
          } catch (error) {}
     };
};

export const citySearchApi = (cityName) => {
     return async (dispatch) => {
          try {
               const URL = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`;
               const Response = await fetch(URL);
               const cityList = await Response.json();
               // console.log("citySearchResult", cityList.results);
               console.log("cityList result", cityList);
               if (cityList.results) {
                    dispatch(weatherActions.updateCityListNames(cityList.results));
               } else {
                    dispatch(weatherActions.updateCityListNames(false));
               }
          } catch (error) {
               console.log(error);
          }
     };
};

export const weatherActions = weatherSlice.actions;

export default weatherSlice.reducer;
