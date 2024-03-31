import { useState } from "react";
import useColor from "../contexts/ColorContext";

const Pixel = () => {
  const { color } = useColor();
  const [pixelColor, setPixelColor] = useState("lightgray");
  return (
    <div
      onClick={() => setPixelColor(color)}
      style={{
        width: "1.4rem",
        height: "1.4rem",
        border: "1px solid #0fffff",
        backgroundColor: `${pixelColor}`,
      }}
    ></div>
  );
};

export default Pixel;
