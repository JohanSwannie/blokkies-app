import useColor from "../contexts/ColorContext";

const colorsToSelect = [
  "lightgreen",
  "orange",
  "skyblue",
  "rebeccapurple",
  "red",
  "peachpuff",
  "yellow",
  "pink",
  "green",
  "lightgray",
];

const ChooseColor = () => {
  const { setColor } = useColor();
  return (
    <div>
      <h2 style={{ marginBottom: "2rem" }}>Choose a Color</h2>
      {colorsToSelect.map((sColor) => (
        <button
          onClick={() => setColor(sColor)}
          key={sColor}
          style={{
            width: "1.5rem",
            height: "1.5rem",
            backgroundColor: `${sColor}`,
            marginRight: "2rem",
            marginBottom: "2rem",
          }}
        />
      ))}
    </div>
  );
};

export default ChooseColor;
