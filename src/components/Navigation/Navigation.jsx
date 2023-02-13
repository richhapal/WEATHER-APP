import { Box } from "@chakra-ui/react";
import { TiWeatherCloudy } from "react-icons/ti";
import { FaList, FaMap, FaWind } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import React from "react";
import "../../sass/navigation.scss";

let Navigation = () => {
     return (
          <Box as="nav" className="navigation ">
               <Box>
                    <Box className="navigation-items logo">
                         <FaWind />
                    </Box>
               </Box>
               <Box className="navigation-items selected">
                    <TiWeatherCloudy size={20} />
                    <p>Weather</p>
               </Box>
               <Box className="navigation-items not-selected">
                    <FaList size={20} />
                    <p>Cities</p>
               </Box>
               <Box className="navigation-items not-selected">
                    <FaMap size={20} />
                    <p>Map</p>
               </Box>
               <Box className="navigation-items not-selected">
                    <FiSettings size={20} />
                    <p>Setting</p>
               </Box>
          </Box>
     );
};

export default Navigation;
