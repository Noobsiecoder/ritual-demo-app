import { createContext, useContext } from "react";

type DisplayNavgivationType = {
  canDisplay: boolean;
  setCanDisplay: (value: boolean) => void;
};

export const DisplayNavgivation = createContext<DisplayNavgivationType>({
  canDisplay: false,
  setCanDisplay: () => {},
});

export const useDisplayNavgivation = () => useContext(DisplayNavgivation);
