import { TiWeatherCloudy } from "react-icons/ti";
import { FaList, FaMap, FaWind } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import React from "react";
import "../../sass/navigation.scss";
import { NavLink, useLocation } from "react-router-dom";
let Navigation = () => {
     return <WithNav />;
};
export default Navigation;

const WithNav = () => {
     const location = useLocation();
     return (
          <nav className="navigation ">
               <div>
                    <div className="navigation-items logo">
                         <FaWind />
                    </div>
               </div>

               <NavLink to="" className={location.pathname === "/" ? "navigation-items selected" : "navigation-items no-selected"} end>
                    <TiWeatherCloudy size={20} />
                    <p>Weather</p>
               </NavLink>
               <NavLink to="map" className={location.pathname === "/map" ? "navigation-items selected" : "navigation-items no-selected"}>
                    <FaMap size={20} />
                    <p>Map</p>
               </NavLink>
               <NavLink to="cities" className={location.pathname === "/cities" ? "navigation-items selected" : "navigation-items no-selected"}>
                    <FaList size={20} />
                    <p>Cities</p>
               </NavLink>
               <NavLink to="setting" className={location.pathname === "/setting" ? "navigation-items selected" : "navigation-items no-selected"}>
                    <FiSettings size={20} />
                    <p>Setting</p>
               </NavLink>
          </nav>
     );
};
