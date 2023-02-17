import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider, Routes, useRoutes } from "react-router-dom";
import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
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
                         <Route path="/cities" element={<h2>Cities</h2>} />
                         <Route path="/map" element={<div>Hi</div>} />
                    </Routes>
               </BrowserRouter>
          </section>
     );
}

export default App;
