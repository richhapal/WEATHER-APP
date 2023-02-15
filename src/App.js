import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import Weather from "./components/Weather/Weather";
import NoCityFound from "./helper/NoCityFound";

function App() {
     const lat = useSelector((state) => state.weatherReducer.lat);
     const long = useSelector((state) => state.weatherReducer.long);
     return (
          <section className="app">
               <Navigation />
               {<Weather />}
               {/* {!lat && !long && <NoCityFound />} */}
          </section>
     );
}

export default App;
