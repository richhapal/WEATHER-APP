import { Box } from "@chakra-ui/react";
import React from "react";
import "../../sass/weeklyweather.scss";

const WeeklyContent = () => {
     return (
          <Box className="weeklyWeatherDivision">
               <Box className="weeklyWeatherDivision-heading">
                    <h4>7-DAY FORECAST</h4>
               </Box>

               <Box className="weeklyWeatherDivision-data">
                    <Box className="weeklyWeatherDivision-row">
                         <Box className="weeklyWeatherDivision-row_day">Monday</Box>
                         <Box className="weeklyWeatherDivision-row_weather">ICON</Box>
                         <Box className="weeklyWeatherDivision-row_temp">25/21</Box>
                    </Box>
                    <Box className="weeklyWeatherDivision-row">
                         <Box className="weeklyWeatherDivision-row_day">Monday</Box>
                         <Box className="weeklyWeatherDivision-row_weather">ICON</Box>
                         <Box className="weeklyWeatherDivision-row_temp">25/21</Box>
                    </Box>
                    <Box className="weeklyWeatherDivision-row">
                         <Box className="weeklyWeatherDivision-row_day">Monday</Box>
                         <Box className="weeklyWeatherDivision-row_weather">ICON</Box>
                         <Box className="weeklyWeatherDivision-row_temp">25/21</Box>
                    </Box>
                    <Box className="weeklyWeatherDivision-row">
                         <Box className="weeklyWeatherDivision-row_day">Monday</Box>
                         <Box className="weeklyWeatherDivision-row_weather">ICON</Box>
                         <Box className="weeklyWeatherDivision-row_temp">25/21</Box>
                    </Box>
                    <Box className="weeklyWeatherDivision-row">
                         <Box className="weeklyWeatherDivision-row_day">Monday</Box>
                         <Box className="weeklyWeatherDivision-row_weather">ICON</Box>
                         <Box className="weeklyWeatherDivision-row_temp">25/21</Box>
                    </Box>
                    <Box className="weeklyWeatherDivision-row">
                         <Box className="weeklyWeatherDivision-row_day">Monday</Box>
                         <Box className="weeklyWeatherDivision-row_weather">ICON</Box>
                         <Box className="weeklyWeatherDivision-row_temp">25/21</Box>
                    </Box>
                    <Box className="weeklyWeatherDivision-row">
                         <Box className="weeklyWeatherDivision-row_day">Monday</Box>
                         <Box className="weeklyWeatherDivision-row_weather">ICON</Box>
                         <Box className="weeklyWeatherDivision-row_temp">25/21</Box>
                    </Box>
               </Box>
          </Box>
     );
};

export default WeeklyContent;
