import React from "react";

import { MenuTable } from "./MenuTable";
import { useMenu } from "./hooks";

/**
 * This is the entry point for our menu. We are passing
 * all of the properties of the returned object from
 * useMenu directly to <MenuTable /> as props
 */
export const Menu = () => <MenuTable {...useMenu()} />;

export default Menu;
