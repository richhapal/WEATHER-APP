import React from "react";
import { useSelector } from "react-redux";
import { googleMapAPI } from "../../helper/config";
import "../../sass/map.scss";
const Map = () => {
     const city = JSON.parse(localStorage.getItem("cityDetail")).cityName;
     return (
          <div className="map">
               <iframe
                    width="100%"
                    height="500"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=${googleMapAPI}&q=${city}`}
               ></iframe>
          </div>
     );
};
export default Map;
