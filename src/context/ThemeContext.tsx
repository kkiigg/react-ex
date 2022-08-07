import { createContext } from "react";
export let themeDefaultColor = "pink";
export default createContext({ color: themeDefaultColor, change: () => {} });
