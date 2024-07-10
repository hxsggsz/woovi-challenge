import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ThemeProvider, useMediaQuery } from "@mui/material";
import { createContext, useContext, ReactNode, useMemo } from "react";

interface IThemeContext {
  mode: boolean;
  toggleTheme: () => void;
}
export const ThemeContext = createContext({} as IThemeContext);

export const useThemes = () => useContext(ThemeContext);

export const ThemeManagerProvider = ({ children }: { children: ReactNode }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useLocalStorage("@theme", prefersDarkMode);

  const colorMode = useMemo(
    () => ({
      toggleTheme: () => {
        setMode((prev) => !prev);
      },
      mode,
    }),
    [mode, setMode],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode ? "dark" : "light",
          primary: {
            main: "#133A6F",
          },
          info: {
            main: "#B2B2B2",
          },
          secondary: {
            main: "#03D69D",
          },
          error: {
            main: red.A400,
          },
        },
        typography: {
          fontFamily: ["Nunito", "Roboto", "sans-serif"].join(","),
        },
      }),
    [mode],
  );
  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
