import { useContext } from "react";
import { rootStoreContext } from "../store";
import { enableLogging } from "mobx-logger";

if (process.env.NODE_ENV === "development") {
//   const { enable } = require("mobx-logger");
  enableLogging();
}
export const useStore = () => useContext(rootStoreContext); //Usees useContext
