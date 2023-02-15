import React from "react";
import { useSelector } from "react-redux";
import CityListStructure from "../../helper/CityListStructure";

const SearchCityList = () => {
     const cityListNames = useSelector((state) => state.weatherReducer.cityListNames);
     return (
          <>
               {cityListNames.map((item) => (
                    <CityListStructure {...item} key={item.id} />
               ))}
          </>
     );
};
export default SearchCityList;
