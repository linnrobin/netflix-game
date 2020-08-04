import React from "react";
import { Box, Heading } from "grommet";

function Navigation() {
  const AppBar = (props) => (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      background="white"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      elevation="medium"
      style={{ zIndex: "1" }}
      {...props}
    />
  );

  return (
    <AppBar>
      <Heading level="3" margin="none">
        P2P
      </Heading>
    </AppBar>
  );
}

export default Navigation;
