import { Box } from "@chakra-ui/react";
import React from "react";
import "../../sass/mainContent.scss";
import logo from "../../images/sunny.png";
import { FaSun, FaWind, FaTemperatureHigh } from "react-icons/fa";
import { ImDroplet } from "react-icons/im";

const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const MainContent = () => {
     return (
          <Box className="mainContent">
               {/* CITY SEARCH BAR */}
               <Box className="mainContent-search">
                    <input type="text" className="mainContent-search__input" placeholder="Enter Your City" />
               </Box>
               {/* CITY DETAILS DIVISION */}
               <Box className="cityDetailsDivision">
                    <Box className="cityDetailsDivision-city">
                         <Box className="cityName">
                              <h2>Jodhpur</h2>
                         </Box>
                         <Box className="cityTemp">
                              <h1>36</h1>
                         </Box>
                    </Box>
                    <Box className="cityDetailsDivision-weatherlogo">
                         <img src={logo} className="image" />
                    </Box>
               </Box>

               {/* DAILY WEATHER FORECAST */}
               <Box className="dailyWeatherForeCast">
                    <Box className="dailyWeatherForeCast-heading">
                         <h4>today's forecast</h4>
                    </Box>
                    <Box className="dailyWeatherForeCast-data">
                         {data.map((item) => (
                              <Box className="dailyWeatherForeCast-data__items">
                                   <p>6.00 AM</p>
                                   <h4>ICON</h4>
                                   <h4>25</h4>
                              </Box>
                         ))}
                    </Box>
               </Box>
               {/* AIR CONDITIONS */}
               <Box className="airConditionDivision">
                    <Box className="airConditionDivision-heading">
                         <h4>air conditions</h4>
                    </Box>
                    <Box className="airConditionDivision-row">
                         <Box className="column">
                              <Box className="icon">
                                   <FaTemperatureHigh />
                              </Box>
                              <Box className="data">
                                   <h4>Real Feel</h4>
                                   <h2>30</h2>
                              </Box>
                         </Box>
                         <Box className="column">
                              <Box className="icon">
                                   <FaWind />
                              </Box>
                              <Box className="data">
                                   <h4>Wind</h4>
                                   <h2>0.2km/h</h2>
                              </Box>
                         </Box>
                    </Box>
                    <Box className="airConditionDivision-row">
                         <Box className="column">
                              <Box className="icon">
                                   <ImDroplet />
                              </Box>
                              <Box className="data">
                                   <h4>Change Of Rain</h4>
                                   <h2>3%</h2>
                              </Box>
                         </Box>
                         <Box className="column">
                              <Box className="icon">
                                   <FaSun />
                              </Box>
                              <Box className="data">
                                   <h4>UV Index</h4>
                                   <h2>3</h2>
                              </Box>
                         </Box>
                    </Box>
               </Box>
          </Box>
     );
};

export default MainContent;
