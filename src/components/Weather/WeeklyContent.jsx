import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callCurrentWeatherApi, callHourlyWeatherApi, callWeeklyWeatherApi } from "../../redux/weatherSlice";
import "../../sass/weeklyweather.scss";

const WeeklyContent = () => {
     const weatherStandardUnit = useSelector((state) => state.weatherReducer.weatherStandardUnit);
     const weeklyCityWeatherData = useSelector((state) => state.weatherReducer.weeklyCityWeatherData);

     return (
          <div className="weeklyWeatherDivision">
               <div className="weeklyWeatherDivision-heading">
                    <h4>7-DAY FORECAST</h4>
               </div>

               <div className="weeklyWeatherDivision-data">
                    {weeklyCityWeatherData.map((item) => (
                         <div className="weeklyWeatherDivision-row" id={item.id} key={item.id}>
                              <div className="weeklyWeatherDivision-row_day">{item.day}</div>
                              <div className="weeklyWeatherDivision-row_weather">ICON</div>
                              <div className="weeklyWeatherDivision-row_temp">
                                   {item.tempMax}/{item.tempMin}
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     );
};

export default WeeklyContent;
