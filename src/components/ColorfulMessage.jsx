import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color, //「color: colrom」と同じ
    fonstSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

//export default ColorfulMessage;
