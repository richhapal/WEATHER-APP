import React, { useEffect } from "react";
import "../../sass/mainContent.scss";
import logo from "../../images/sunny.png";

import { useSelector } from "react-redux";
import DailyTimeWeather from "./DailyTimeWeather";
import AirConditoinDivision from "./AirConditoinDivision";
import SearchCityName from "./SearchCityName";
import CityDetailsDivision from "./CityDetailsDivision";

const MainContent = () => {
     const currentCityWeatherData = useSelector((state) => state.weatherReducer.currentCityWeatherData);
     const lat = useSelector((state) => state.weatherReducer.lat);
     const long = useSelector((state) => state.weatherReducer.long);
     const hourlyCityTempWeatherData = useSelector((state) => state.weatherReducer.hourlyCityTempWeatherData);
     return (
          <section className="mainContent">
               <SearchCityName />
               {lat && long && <CityDetailsDivision />}
               {console.log(hourlyCityTempWeatherData.length, lat, long, hourlyCityTempWeatherData)}
               {hourlyCityTempWeatherData.length !== 0 && <DailyTimeWeather />}
               {lat && long && <AirConditoinDivision />}
          </section>
     );
};

export default MainContent;
