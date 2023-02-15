import React from "react";
import { FaSun, FaWind, FaTemperatureHigh } from "react-icons/fa";
import { ImDroplet } from "react-icons/im";
const AirConditoinDivision = () => {
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
     );
};

export default AirConditoinDivision;
