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
                         <h4>
                              <p>{currentCityWeatherData.main}</p>
                         </h4>
                    </div>
                    <div className="cityTemp">
                         <h2>
                              {currentCityWeatherData.temp}
                              {weatherStandardUnitIcon}
                         </h2>
                    </div>
               </div>
               <div className="cityDetailsDivision-weatherlogo">
                    {console.log(currentCityWeatherData)}
                    <img src={`../icons/${currentCityWeatherData.img}.png`} alt="weather icon" />
               </div>
          </div>
     );
};
export default CityDetailsDivision;
