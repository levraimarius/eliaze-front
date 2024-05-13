import React from "react";
import "./Subtitle.scss";

const Subtitle = ({ text, align = "left" }) => {
  const alignStyle = {
    textAlign: align,
  };

  return (
    <div style={alignStyle}>
      <h3>{text}</h3>
    </div>
  );
};

export default Subtitle;
