import { createContext, useContext } from "react";

export const LightModeContext = createContext(false);
export const useLightMode = () => useContext(LightModeContext);