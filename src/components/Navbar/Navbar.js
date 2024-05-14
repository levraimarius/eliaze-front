import React from "react";
import { Link } from "react-router-dom";
import { MemoryArrowRightCircle } from "@pictogrammers/memory";
import Button from "../Button/Button";
import "./Navbar.scss";

import eliazesmalllogo from "../../assets/files/images/eliaze-small-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <Link to="/">
            <img src={eliazesmalllogo} className="logo" alt="Logo du serveur" />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/vote" className="link">
              Vote
            </Link>
          </li>
          <li>
            <a
              href="https://wiki.eliaze.fr/"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Wiki
            </a>
          </li>
          <li>
            <a
              href="https://map.eliaze.fr/"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Map
            </a>
          </li>
          <li>
            <Link to="/villes-et-nations" className="link">
              Villes et Nations
            </Link>
          </li>
          <li>
            <Link to="/" className="link">
              Boutique
            </Link>
          </li>
          <li>
            <Button
              color="orange"
              text="Connexion"
              link="/connexion"
              icon={MemoryArrowRightCircle}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
