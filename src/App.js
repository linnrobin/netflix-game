import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Box, Grommet, ResponsiveContext } from "grommet";

import Navigation from "./components/Navigation";
import MainBody from "./components/MainBody";

function App() {
  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill>
            <Router>
              <Navigation />
              <MainBody size={size} />
            </Router>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}
const theme = {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

export default App;
