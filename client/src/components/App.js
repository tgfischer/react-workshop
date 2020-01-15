import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import { ThemeProvider } from "./ThemeProvider";
import Page from "./Page";
import Menu from "./Menu";

const App = () => (
  <ThemeProvider>
    <CssBaseline />
    <Page>
      <Menu />
    </Page>
  </ThemeProvider>
);

export default App;
