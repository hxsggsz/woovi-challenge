import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./i18n";
import "./index.css";
import { ThemeManagerProvider } from "./context/themeContext.tsx";
import CssBaseline from "@mui/material/CssBaseline";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeManagerProvider>
      <CssBaseline />
      <App />
    </ThemeManagerProvider>
  </React.StrictMode>,
);
