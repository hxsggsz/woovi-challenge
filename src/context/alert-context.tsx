import React, { createContext, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

type AlertSeverities = "success" | "info" | "warning" | "error";

export interface AlertContextProps {
  alert: (message: string, severity: AlertSeverities) => void;
}

export const AlertContext = createContext({} as AlertContextProps);

export const AlertProvider = ({ children }: React.PropsWithChildren) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<AlertSeverities>("info");

  const hideAlert = () => {
    setOpen(false);
  };

  const alert = (newMessage: string, newSeverity: AlertSeverities = "info") => {
    setMessage(newMessage);
    setSeverity(newSeverity);
    setOpen(true);
  };

  return (
    <AlertContext.Provider value={{ alert }}>
      {children}
      <Snackbar open={open} autoHideDuration={6000} onClose={hideAlert}>
        <Alert
          variant="filled"
          onClose={hideAlert}
          severity={severity}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </AlertContext.Provider>
  );
};
