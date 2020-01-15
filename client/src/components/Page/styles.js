import { Grid } from "@material-ui/core";
import blueGrey from "@material-ui/core/colors/blueGrey";
import styled from "styled-components";

/**
 * This notation is called a Template Literal, and it's
 * the syntax that styled-components uses.
 *
 * You provide styled-components a component or HTML element
 * (e.g. styled.div`...`;), and attach any styles that you want
 * in it. This type of styling can be powerful for theming and
 * conditional styling (amoung other things)
 */
export const StyledGrid = styled(Grid)`
  height: 100vh;
  background: ${blueGrey[50]};
`;
