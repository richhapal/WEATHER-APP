import React from "react";

export const HourlyWeatherRow = (props) => {
     return (
          <>
               <div className="dailyWeatherForeCast-data__items" key={props.id}>
                    <p>{props.time}</p>
                    <h4>ICON</h4>
                    <h4>
                         {props.temp}
                         {props.unit}
                    </h4>
               </div>
          </>
     );
};
export default HourlyWeatherRow;
