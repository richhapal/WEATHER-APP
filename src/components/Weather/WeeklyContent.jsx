import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callCurrentWeatherApi, callHourlyWeatherApi, callWeeklyWeatherApi } from "../../redux/weatherSlice";
import "../../sass/weeklyweather.scss";

const WeeklyContent = () => {
     const currentCityWeatherData = useSelector((state) => state.weatherReducer.currentCityWeatherData);
     const weatherStandardUnit = useSelector((state) => state.weatherReducer.weatherStandardUnit);
     const lat = useSelector((state) => state.weatherReducer.lat);
     const long = useSelector((state) => state.weatherReducer.long);
     const weeklyCityWeatherData = useSelector((state) => state.weatherReducer.weeklyCityWeatherData);

     const dispatch = useDispatch();
     useEffect(() => {
          if (!currentCityWeatherData) {
               dispatch(callCurrentWeatherApi(lat, long));
               dispatch(callWeeklyWeatherApi(lat, long));
               dispatch(callHourlyWeatherApi(lat, long));
          }
     }, []);

     return (
          <div className="weeklyWeatherDivision">
               <div className="weeklyWeatherDivision-heading">
                    <h4>7-DAY FORECAST</h4>
               </div>

               <div className="weeklyWeatherDivision-data">
                    {/* {weeklyCityWeatherData.map((item, index) => (
                         <div className="weeklyWeatherDivision-row" id={index} key={index}>
                              <div className="weeklyWeatherDivision-row_day">Monday</div>
                              <div className="weeklyWeatherDivision-row_weather">ICON</div>
                              <div className="weeklyWeatherDivision-row_temp">25/21</div>
                         </div>
                    ))} */}
               </div>
          </div>
     );
};

export default WeeklyContent;
