import { TiWeatherCloudy } from "react-icons/ti";
import { FaList, FaMap, FaWind } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import React from "react";
import "../../sass/navigation.scss";

let Navigation = () => {
     return (
          <nav as="nav" className="navigation ">
               <div>
                    <div className="navigation-items logo">
                         <FaWind />
                    </div>
               </div>
               <div className="navigation-items selected">
                    <TiWeatherCloudy size={20} />
                    <p>Weather</p>
               </div>
               <div className="navigation-items not-selected">
                    <FaList size={20} />
                    <p>Cities</p>
               </div>
               <div className="navigation-items not-selected">
                    <FaMap size={20} />
                    <p>Map</p>
               </div>
               <div className="navigation-items not-selected">
                    <FiSettings size={20} />
                    <p>Setting</p>
               </div>
          </nav>
     );
};

export default Navigation;
