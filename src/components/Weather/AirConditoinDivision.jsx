import React from "react";
import { FaSun, FaWind, FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { useSelector } from "react-redux";
const AirConditoinDivision = () => {
     const currentCityWeatherData = useSelector((state) => state.weatherReducer.currentCityWeatherData);
     return (
          <div className="airConditionDivision">
               <div className="airConditionDivision-heading">
                    <h4>Air Conditions</h4>
               </div>
               <div className="airConditionDivision-row">
                    <div className="column">
                         <div className="icon">
                              <FaTemperatureHigh />
                         </div>
                         <div className="data">
                              <h4>Real Feel</h4>
                              <h2>{currentCityWeatherData.feel}</h2>
                         </div>
                    </div>
                    <div className="column">
                         <div className="icon">
                              <FaWind />
                         </div>
                         <div className="data">
                              <h4>Wind</h4>
                              <h2>{currentCityWeatherData.wind} km/h</h2>
                         </div>
                    </div>
               </div>
               <div className="airConditionDivision-row">
                    <div className="column">
                         <div className="icon">
                              <WiHumidity />
                         </div>
                         <div className="data">
                              <h4>Humidity</h4>
                              <h2>{currentCityWeatherData.humidity}%</h2>
                         </div>
                    </div>
                    <div className="column">
                         <div className="icon">
                              <FaSun />
                         </div>
                         <div className="data">
                              <h4>UV Index</h4>
                              <h2>{currentCityWeatherData.uv}</h2>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default AirConditoinDivision;
