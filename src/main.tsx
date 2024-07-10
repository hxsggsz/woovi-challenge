import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeManagerProvider } from "@/context/theme-context.tsx";
import Header from "@/components/header.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeManagerProvider>
      <Header />
      <CssBaseline />
      <App />
    </ThemeManagerProvider>
  </React.StrictMode>,
);
