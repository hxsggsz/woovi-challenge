import { useContext } from "react";
import { ThemeContext, ThemeContextProps } from "./theme-context";

export const useThemes = () => useContext<ThemeContextProps>(ThemeContext);
