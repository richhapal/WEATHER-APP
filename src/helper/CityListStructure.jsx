import React from "react";
import { useDispatch } from "react-redux";
import { weatherActions } from "../redux/weatherSlice";

const CityListStructure = (props) => {
     const dispatch = useDispatch();
     const handleSearchSelectedCity = () => {
          let cityName = props.name,
               lat = props.latitude,
               long = props.longitude,
               timezone = props.timezone;
          dispatch(weatherActions.updateSearchSelectedCity({ cityName: cityName, lat: lat, long: long, timezone: timezone }));
     };

     return (
          <div className="serarchCityList" onClick={handleSearchSelectedCity}>
               <p>
                    {props.name},{props.admin1},{props.country},{props.timezone},
               </p>
          </div>
     );
};
export default CityListStructure;
