import React from "react";
import { Grid } from "@material-ui/core";

const Page = ({ children }) => (
  <Grid container>
    <Grid item>{children}</Grid>
  </Grid>
);

export default App;
