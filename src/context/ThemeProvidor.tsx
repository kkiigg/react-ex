import { OmitProps } from "antd/lib/transfer/ListBody";
import { useState } from "react";
import ThemeContext from "./ThemeContext";

export default (props) => {
  let [color, setColor] = useState("pink");
  const changeColor = () => {
    const targetColor = color === "pink" ? "olive" : "pink";
    console.log(color, targetColor);
    setColor(targetColor);
  };
  return (
    <ThemeContext.Provider value={{ color, change: changeColor }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
