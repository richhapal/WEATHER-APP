import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import SearchCityList from "./SearchCityList";
import { weatherActions } from "../../redux/weatherSlice";
import NoCityFound from "../../helper/NoCityFound";
import { citySearchApi } from "../../redux/weatherActions";

const SearchCityName = () => {
     const searchCity = useSelector((state) => state.weatherReducer.searchCity);
     const cityListNames = useSelector((state) => state.weatherReducer.cityListNames);
     const noCityFound = useSelector((state) => state.weatherReducer.noCityFound);
     const lat = useSelector((state) => state.weatherReducer.lat);
     const dispatch = useDispatch();
     const handleSearchCity = (e) => {
          dispatch(weatherActions.updateSearchCity(e.target.value));
     };

     useEffect(() => {
          if (searchCity) {
               dispatch(citySearchApi(searchCity));
          }
     }, [searchCity]);

     return (
          <>
               <div className="mainContent-search">
                    <div className="mainContent-search_searchBar">
                         <input type="text" className="mainContent-search__input" onChange={handleSearchCity} placeholder="Enter Your City" value={searchCity} />
                    </div>
                    <div className="mainContent-search_cityList">
                         {cityListNames && <SearchCityList />}
                         {!lat && <NoCityFound />}
                    </div>
               </div>
          </>
     );
};
export default SearchCityName;
