import React from "react";
import { useDispatch } from "react-redux";

const CityListStructure = (props) => {
     const dispatch = useDispatch();
     const handleSearchSelectedCity = () => {};

     return (
          <div className="serarchCityList" onClick={handleSearchSelectedCity}>
               <p>
                    {props.name},{props.admin1},{props.country},{props.timezone},
               </p>
          </div>
     );
};
export default CityListStructure;
