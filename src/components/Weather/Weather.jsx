import React, { useEffect } from "react";
import MainContent from "./MainContent";
import "../../sass/weather.scss";
import WeeklyContent from "./WeeklyContent";
import { useDispatch, useSelector } from "react-redux";
import { callCurrentWeatherApi, callHourlyWeatherApi, callWeeklyWeatherApi } from "../../redux/weatherSlice";
const Weather = () => {
     const lat = useSelector((state) => state.weatherReducer.lat);
     const long = useSelector((state) => state.weatherReducer.long);
     return (
          <section className="Weather">
               <MainContent />
               {lat && long && <WeeklyContent />}
          </section>
     );
};
export default Weather;
