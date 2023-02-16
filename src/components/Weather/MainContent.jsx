import React from "react";
import "../../sass/mainContent.scss";
import { useSelector } from "react-redux";
import DailyTimeWeather from "./DailyTimeWeather";
import AirConditoinDivision from "./AirConditoinDivision";
import SearchCityName from "./SearchCityName";
import CityDetailsDivision from "./CityDetailsDivision";

const MainContent = () => {
     const { lat, long } = useSelector((state) => state.weatherReducer);
     return (
          <section className="mainContent">
               <SearchCityName />
               {lat && long && <CityDetailsDivision />}
               {long && lat && <DailyTimeWeather />}
               {lat && long && <AirConditoinDivision />}
          </section>
     );
};

export default MainContent;
