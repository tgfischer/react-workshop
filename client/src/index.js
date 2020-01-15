import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

/**
 * This is the entrypoint of the application. When you navigate
 * to http://hostname:3000, it'll render the <App /> component
 */
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
