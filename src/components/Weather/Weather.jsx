import { Box } from "@chakra-ui/react";
import React from "react";
import MainContent from "./MainContent";
import "../../sass/weather.scss";
import WeeklyContent from "./WeeklyContent";
import { useSelector } from "react-redux";
const Weather = () => {
     const lat = useSelector((state) => state.weatherReducer.lat);
     const long = useSelector((state) => state.weatherReducer.long);
     return (
          <section className="Weather">
               <MainContent />
               {lat && long && <WeeklyContent />}
          </section>
     );
};
export default Weather;
