import { Box } from "@chakra-ui/react";
import "./App.scss";

import Navigation from "./components/Navigation/Navigation";
import Weather from "./components/Weather/Weather";
function App() {
     return (
          <Box className="app">
               <Navigation />
               <Weather />
          </Box>
     );
}

export default App;
