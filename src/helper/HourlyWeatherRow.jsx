import React from "react";
import { AiOutlineCloud } from "react-icons/ai";
import { TbTemperature } from "react-icons/tb";
import { BiTimeFive } from "react-icons/bi";
export const HourlyWeatherRow = (props) => {
     return (
          <>
               <div className="dailyWeatherForeCast-data__items" key={props.id}>
                    <div className="dailyWeatherForeCast-data__items--0">
                         <BiTimeFive />
                         {props.time}
                    </div>
                    <div className="dailyWeatherForeCast-data__items--0">
                         <AiOutlineCloud />
                         <p>hi</p>
                    </div>
                    <div className="dailyWeatherForeCast-data__items--0">
                         <TbTemperature />
                         {props.temp}
                         {props.unit}
                    </div>
               </div>
          </>
     );
};
export default HourlyWeatherRow;
