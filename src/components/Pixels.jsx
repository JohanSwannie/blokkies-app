import Pixel from "./Pixel";

const Pixels = () => {
  const pixies = [];
  for (let i = 0; i < 1620; i++) {
    pixies.push(<Pixel />);
  }
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(60, 1fr)",
        width: "90vw",
        margin: "auto",
        border: "3px solid gray",
      }}
    >
      {pixies}
    </div>
  );
};

export default Pixels;
