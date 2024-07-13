import { useContext } from "react";
import { AlertContext, AlertContextProps } from "./alert-context";

export const useAlert = () => useContext<AlertContextProps>(AlertContext);
