import { useContext } from "react";
import { IThemeContext, ThemeContext } from "./theme-context";

export const useThemes = () => useContext<IThemeContext>(ThemeContext);
