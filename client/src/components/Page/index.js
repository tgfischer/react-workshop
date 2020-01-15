import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

import { StyledGrid } from "./styles";

/**
 * This component is used for managing the layout of the
 * app. It defines the width of the grid, and aligns the
 * contents in the middle of the screen.
 *
 * The sm and xs define how wide we want our container to
 * be depending on the screensize. For example, if we're
 * on mobile, it will make it full screen (aka 12 units
 * across). If our screen is any bigger, it makes it 2/3
 * of the screen wide
 *
 * @param children The child components in this page
 */
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
