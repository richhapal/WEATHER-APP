import { TiWeatherCloudy } from "react-icons/ti";
import { FaList, FaMap, FaWind } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
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
          <div className="navLink ">
               <div>
                    <div className="navLink-items logo">
                         <FaWind />
                    </div>
               </div>

               <NavLink to="" className={location.pathname === "/" ? "navLink-items selected" : "navLink-items no-selected"} end>
                    <TiWeatherCloudy size={20} />
                    <p>Weather</p>
               </NavLink>
               <NavLink to="map" className={location.pathname === "/map" ? "navLink-items selected" : "navLink-items no-selected"}>
                    <FaMap size={20} />
                    <p>Map</p>
               </NavLink>
               <NavLink to="cities" className={location.pathname === "/cities" ? "navLink-items selected" : "navLink-items no-selected"}>
                    <FaList size={20} />
                    <p>Cities</p>
               </NavLink>
               <NavLink to="setting" className={location.pathname === "/setting" ? "navLink-items selected" : "navLink-items no-selected"}>
                    <FiSettings size={20} />
                    <p>Setting</p>
               </NavLink>
          </div>
     );
};
