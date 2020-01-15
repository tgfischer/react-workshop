import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

import { StyledGrid } from "./styles";

const Page = ({ children }) => (
  <StyledGrid container justify="center" alignItems="center">
    <Grid item sm={8} xs={12}>
      {children}
    </Grid>
  </StyledGrid>
);

Page.propTypes = {
  children: PropTypes.node.isRequired
};

export default Page;
