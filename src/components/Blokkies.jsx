import { useState } from "react";
import { ColorContextProvider } from "../contexts/ColorContext";
import ChooseColor from "./ChooseColor";
import Pixels from "./Pixels";

const Blokkies = () => {
  const [color, setColor] = useState("");
  return (
    <ColorContextProvider value={{ color, setColor }}>
      <ChooseColor />
      <Pixels />
    </ColorContextProvider>
  );
};

export default Blokkies;
