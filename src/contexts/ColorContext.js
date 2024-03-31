import { createContext, useContext } from "react";

const ColorContext = createContext({
  color: "lightgray",
  setColor: () => {},
});

export const ColorContextProvider = ColorContext.Provider;

const useColor = () => {
  return useContext(ColorContext);
};

export default useColor;
