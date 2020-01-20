import React, { Suspense, lazy } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import { useMenu } from "./hooks";

/**
 * This is likely overkill for this scenario, but it gives an
 * example of how to do code-splitting for individual
 * components, and load them only when you need them.
 *
 * I usually use this method in the index.js file of a component,
 * and for tests I'll import the component directly (if
 * required). Some snapshot test libraries aren't fond of lazy
 * loading yet.
 */
const LazyMenuTable = lazy(() => import("./MenuTable"));

/**
 * This is the entry point for our menu. We are passing
 * all of the properties of the returned object from
 * useMenu directly to <MenuTable /> as props
 *
 * LazyMenuTable will resolve to MenuTable when it has loaded.
 * The fallback prop is required, but you can just pass null
 * if you'd like
 */
export const Menu = () => (
  <Suspense fallback={<CircularProgress />}>
    <LazyMenuTable {...useMenu()} />
  </Suspense>
);

export default Menu;
