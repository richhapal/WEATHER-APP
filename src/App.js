import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider, Routes, useRoutes } from "react-router-dom";
import "./App.scss";
import Cities from "./components/Cities/Cities";
import Map from "./components/Map/Map";
import Navigation from "./components/Navigation/Navigation";
import Setting from "./components/Setting/Setting";
import Weather from "./components/Weather/Weather";

// const router = createBrowserRouter([]);

// const routers = [
//      {
//           path: "",
//           element: <Weather />,
//      },
//      {
//           path: "map",
//           element: <div>Hi</div>,
//      },
// ];

function App() {
     return (
          <section className="app">
               <BrowserRouter>
                    <Navigation />
                    <Routes>
                         <Route path="/" element={<Weather />} />
                         <Route path="/cities" element={<Cities />} />
                         <Route path="/map" element={<Map />} />
                         <Route path="/setting" element={<Setting />} />
                    </Routes>
               </BrowserRouter>
          </section>
     );
}

export default App;
