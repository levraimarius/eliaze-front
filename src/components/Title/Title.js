import React from "react";
import "./Title.scss";

const Title = ({ text, align = "left" }) => {
  const alignStyle = {
    textAlign: align,
  };

  return (
    <div style={alignStyle}>
      <h2>{text}</h2>
    </div>
  );
};

export default Title;
