import "./ColoredImage.css";
import { useEffect } from "react";

const ColoredImage = ({ children, color }) => {
  return <div className={`colored-image ${color.color}`}>{children}</div>;
};

export default ColoredImage;
