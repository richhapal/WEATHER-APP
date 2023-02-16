import React, { useEffect } from "react";
import MainContent from "./MainContent";
import "../../sass/weather.scss";
import WeeklyContent from "./WeeklyContent";
import { useDispatch, useSelector } from "react-redux";
import { weatherActions } from "../../redux/weatherSlice";
import { callCurrentWeatherApi, callHourlyWeatherApi, callWeeklyWeatherApi } from "../../redux/weatherActions";
const Weather = () => {
     const lat = useSelector((state) => state.weatherReducer.lat);
     const long = useSelector((state) => state.weatherReducer.long);
     const timezone = useSelector((state) => state.weatherReducer.timezone);
     const cityName = useSelector((state) => state.weatherReducer.cityName);
     const dispatch = useDispatch();

     useEffect(() => {
          if (lat && long) {
               let details = { cityName: cityName, lat: lat, long: long };
               localStorage.setItem("cityDetail", JSON.stringify(details));
          } else {
               let details = localStorage.getItem("cityDetail");
               details && dispatch(weatherActions.updateFromLocalStorage(JSON.parse(details)));
          }
     }, [lat, long]);

     useEffect(() => {
          if (lat && long) {
               dispatch(callCurrentWeatherApi(lat, long));
               dispatch(callWeeklyWeatherApi(lat, long, timezone));
               dispatch(callHourlyWeatherApi(lat, long));
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
