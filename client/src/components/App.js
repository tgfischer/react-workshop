import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Page from "./Page";
import Menu from "./Menu";

const App = () => (
  <>
    <CssBaseline />
    <Page>
      <Menu />
    </Page>
  </>
);

export default App;
