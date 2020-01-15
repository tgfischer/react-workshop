import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

/**
 * Note: Both Page and Menu are folders. In this case, the import
 * will look for index.js, and import that
 */
import Page from "./Page";
import Menu from "./Menu";

/**
 * This is where we're going to do all of our global set up.
 * Things like resetting the default CSS (see <CssBaseline />),
 * and rendering the core of our application
 *
 * Note: The <> is the same as <Fragment>
 */
const App = () => (
  <>
    <CssBaseline />
    <Page>
      <Menu />
    </Page>
  </>
);

export default App;
