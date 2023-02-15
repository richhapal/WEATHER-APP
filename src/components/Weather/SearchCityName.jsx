import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import SearchCityList from "./SearchCityList";
import { callCurrentWeatherApi, callHourlyWeatherApi, callWeeklyWeatherApi, citySearchApi, weatherActions } from "../../redux/weatherSlice";
import NoCityFound from "../../helper/NoCityFound";

const SearchCityName = () => {
     const searchCity = useSelector((state) => state.weatherReducer.searchCity);
     const cityListNames = useSelector((state) => state.weatherReducer.cityListNames);
     const noCityFound = useSelector((state) => state.weatherReducer.noCityFound);
     const lat = useSelector((state) => state.weatherReducer.lat);
     const long = useSelector((state) => state.weatherReducer.long);
     const timezone = useSelector((state) => state.weatherReducer.timezone);
     const cityName = useSelector((state) => state.weatherReducer.cityName);
     const dispatch = useDispatch();
     const handleSearchCity = (e) => {
          dispatch(weatherActions.updateSearchCity(e.target.value));
     };

     useEffect(() => {
          if (searchCity) {
               dispatch(citySearchApi(searchCity));
          }
     }, [searchCity]);

     useEffect(() => {
          if (lat && long) {
               dispatch(callCurrentWeatherApi(cityName));
               dispatch(callWeeklyWeatherApi(lat, long, timezone));
               console.log("call weekly weather api");
               dispatch(callHourlyWeatherApi(lat, long));
               console.log("call hourly weather api");
          }
     }, [lat, long]);
     return (
          <>
               <div className="mainContent-search">
                    <div className="mainContent-search_searchBar">
                         <input type="text" className="mainContent-search__input" onChange={handleSearchCity} placeholder="Enter Your City" value={searchCity} />
                    </div>
                    <div className="mainContent-search_cityList">
                         {cityListNames && <SearchCityList />}
                         {noCityFound && <NoCityFound />}
                    </div>
               </div>
          </>
     );
};
export default SearchCityName;
