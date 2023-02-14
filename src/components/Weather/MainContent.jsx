import React from "react";
import "../../sass/mainContent.scss";
import logo from "../../images/sunny.png";
import { FaSun, FaWind, FaTemperatureHigh } from "react-icons/fa";
import { ImDroplet } from "react-icons/im";
import { useSelector } from "react-redux";
const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const MainContent = () => {
     const cityName = useSelector((state) => state.weatherReducer.cityName);
     const weatherStandardUnitIcon = useSelector((state) => state.weatherReducer.weatherStandardUnitIcon);
     const currentCityWeatherData = useSelector((state) => state.weatherReducer.currentCityWeatherData);
     const hourlyCityTempWeatherData = useSelector((state) => state.weatherReducer.hourlyCityTempWeatherData);
     return (
          <section className="mainContent">
               {/* CITY SEARCH BAR */}
               <div className="mainContent-search">
                    <input type="text" className="mainContent-search__input" placeholder="Enter Your City" />
               </div>
               {/* CITY DETAILS DIVISION */}
               <div className="cityDetailsDivision">
                    <div className="cityDetailsDivision-city">
                         <div className="cityName">
                              <h2>{cityName}</h2>
                         </div>
                         <div className="cityTemp">
                              <h2></h2>
                         </div>
                    </div>
                    <div className="cityDetailsDivision-weatherlogo">
                         {/* &{currentCityWeatherData.weather[0].icon} */}
                         {/* <img src={logo} className="image" /> */}
                    </div>
               </div>

               {/* DAILY WEATHER FORECAST */}
               <div className="dailyWeatherForeCast">
                    <div className="dailyWeatherForeCast-heading">
                         <h4>Today's Forecast</h4>
                    </div>
                    <div className="dailyWeatherForeCast-data">
                         {hourlyCityTempWeatherData.map((item) => (
                              <div className="dailyWeatherForeCast-data__items">
                                   <p>6.00 AM</p>
                                   <h4>ICON</h4>
                                   <h4>{item}</h4>
                              </div>
                         ))}
                    </div>
               </div>
               {/* AIR CONDITIONS */}
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
                                   <h2>30</h2>
                              </div>
                         </div>
                         <div className="column">
                              <div className="icon">
                                   <FaWind />
                              </div>
                              <div className="data">
                                   <h4>Wind</h4>
                                   <h2>0.2km/h</h2>
                              </div>
                         </div>
                    </div>
                    <div className="airConditionDivision-row">
                         <div className="column">
                              <div className="icon">
                                   <ImDroplet />
                              </div>
                              <div className="data">
                                   <h4>Change Of Rain</h4>
                                   <h2>3%</h2>
                              </div>
                         </div>
                         <div className="column">
                              <div className="icon">
                                   <FaSun />
                              </div>
                              <div className="data">
                                   <h4>UV Index</h4>
                                   <h2>3</h2>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default MainContent;
