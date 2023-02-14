import { Box } from "@chakra-ui/react";
import React from "react";
import MainContent from "./MainContent";
import "../../sass/weather.scss";
import WeeklyContent from "./WeeklyContent";
const Weather = () => {
     return (
          <section className="Weather">
               <MainContent />
               <WeeklyContent />
          </section>
     );
};
export default Weather;
