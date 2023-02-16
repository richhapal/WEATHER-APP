import React, { useEffect } from "react";
import MainContent from "./MainContent";
import "../../sass/weather.scss";
import WeeklyContent from "./WeeklyContent";
import { useDispatch, useSelector } from "react-redux";
import { callCurrentWeatherApi, callHourlyWeatherApi, callWeeklyWeatherApi } from "../../redux/weatherSlice";
const Weather = () => {
     const lat = useSelector((state) => state.weatherReducer.lat);
     const long = useSelector((state) => state.weatherReducer.long);
     const timezone = useSelector((state) => state.weatherReducer.timezone);
     const cityName = useSelector((state) => state.weatherReducer.cityName);
     const dispatch = useDispatch();
     useEffect(() => {
          if (lat && long) {
               dispatch(callCurrentWeatherApi(cityName));
               console.log("call current weather api useEffect");
               dispatch(callWeeklyWeatherApi(lat, long, timezone));
               console.log("call weekly weather api useEffect");
               dispatch(callHourlyWeatherApi(lat, long));
               console.log("call hourly weather api useEffect");
          }
     }, [lat, long]);
     return (
          <section className="Weather">
               <MainContent />
               {lat && long && <WeeklyContent />}
          </section>
     );
};
export default Weather;
