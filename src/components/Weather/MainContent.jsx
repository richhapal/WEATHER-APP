import React from "react";
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
     return (
          <section className="mainContent">
               <SearchCityName />
               {lat && long && <CityDetailsDivision />}
               {lat && long && <DailyTimeWeather />}
               {lat && long && <AirConditoinDivision />}
          </section>
     );
};

export default MainContent;
