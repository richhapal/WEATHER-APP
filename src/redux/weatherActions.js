import { OPEN_WEATHER_API_KEY } from "../helper/config";
import { weatherActions } from "./weatherSlice";

export const callCurrentWeatherApi = (lat, long) => {
     return async (dispatch) => {
          try {
               const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=daily,minutely,hourly&units=metric&appid=${OPEN_WEATHER_API_KEY}`;
               const currentCityWeatherResponse = await fetch(URL);
               const result = await currentCityWeatherResponse.json();
               const { feels_like, humidity, temp, wind_speed, uvi } = result.current;
               const { icon, main } = result.current.weather[0];
               console.log("------------------", result.current);
               dispatch(weatherActions.updateCurrentCityWeatherData({ humidity: humidity, temp: temp, uv: uvi, wind: wind_speed, feel: feels_like, img: icon, main: main }));
          } catch (err) {
               console.log(err);
          }
     };
};
export const callWeeklyWeatherApi = (lat, long, timezone) => {
     return async (dispatch) => {
          try {
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
               }
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
