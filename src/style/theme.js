import { extendTheme } from "@chakra-ui/react";
import "@fontsource/turret-road";
import "@fontsource/bungee-hairline";
import "@fontsource/megrim";
import "@fontsource/rubik";
const theme = extendTheme({
     styles: {
          global: {
               body: {
                    // fontFamily: "Bungee Hairline, cursive",
                    // fontFamily: "Turret Road, cursive",
                    // fontFamily: "Megrim,cursive",
                    fontFamily: "Rubik, sans-serif",
               },
          },
     },
});

export default theme;
