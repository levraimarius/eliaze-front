import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";
import Icon from "@mdi/react";

const Button = ({ color, text, link, icon, imageLink, imageAlt }) => {
  const buttonClassName = `button ${color}`;

  return (
    <Link
      to={link}
      className={buttonClassName}
      style={{ textDecoration: "none" }}
    >
      {text}
      {icon && <Icon path={icon} size={0.9} className="button-icon" />}
      {imageLink && (
        <img src={imageLink} alt={imageAlt} className="button-image" />
      )}
    </Link>
  );
};

export default Button;
