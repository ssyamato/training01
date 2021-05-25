import React from "react";

const ColorfulMessage = (props) => {
  console.log(props);
  const contentStyle = {
    color: props.color,
    fontSize: "38px" // キャメルケースではなくパスカルケースとする
  };

  return <p style={contentStyle}>{props.children}</p>;
};

export default ColorfulMessage;
