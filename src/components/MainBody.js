import React from "react";
import { Box } from "grommet";

import Routes from "../routes";

function MainBody({ size }) {
  return (
    <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
      <Box flex align="center">
        <Routes />
      </Box>
    </Box>
  );
}

export default MainBody;
