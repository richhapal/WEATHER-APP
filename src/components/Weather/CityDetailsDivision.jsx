import React from "react";
import { useSelector } from "react-redux";

const CityDetailsDivision = () => {
     const cityName = useSelector((state) => state.weatherReducer.cityName);
     const weatherStandardUnitIcon = useSelector((state) => state.weatherReducer.weatherStandardUnitIcon);
     const currentCityWeatherData = useSelector((state) => state.weatherReducer.currentCityWeatherData);
     return (
          <div className="cityDetailsDivision">
               <div className="cityDetailsDivision-city">
                    <div className="cityName">
                         <h2>{cityName}</h2>
                    </div>
                    <div className="cityTemp">
                         <h2>
                              {currentCityWeatherData.temp}
                              {weatherStandardUnitIcon}
                         </h2>
                    </div>
               </div>
               <div className="cityDetailsDivision-weatherlogo">
                    {/* &{currentCityWeatherData.weather[0].icon} */}
                    {/* <img src={logo} className="image" /> */}
               </div>
          </div>
     );
};
export default CityDetailsDivision;
