import { createContext } from "react";
import { RootStore } from "./RootStore";

export const rootStoreContext = createContext({
  //Create createContext
  rootStore: new RootStore(),
});
