import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useTranslation } from "react-i18next";
import { useThemes } from "./context/themeContext";
import { Box, Container, Typography } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  const { toggleTheme } = useThemes();

  const { t } = useTranslation();

  return (
    <Box>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Typography>Vite + React</Typography>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={toggleTheme}>togle theme</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">{t("title:main")}</p>
    </Box>
  );
}

export default App;
