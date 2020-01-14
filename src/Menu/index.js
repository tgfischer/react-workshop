import React from "react";

import { MenuTable } from "./MenuTable";
import { useMenu } from "./hooks";

export const Menu = () => <MenuTable {...useMenu()} />;

export default Menu;
