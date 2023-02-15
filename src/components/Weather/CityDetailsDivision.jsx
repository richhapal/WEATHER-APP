import React from "react";
import { useSelector } from "react-redux";

const CityDetailsDivision = (props) => {
     const cityName = useSelector((state) => state.weatherReducer.cityName);
     return (
          <div className="cityDetailsDivision">
               <div className="cityDetailsDivision-city">
                    <div className="cityName">
                         <h2>{cityName}</h2>
                    </div>
                    <div className="cityTemp">
                         <h2>32{props.unit}</h2>
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
