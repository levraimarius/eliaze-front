import React from "react";
import "./Footer.scss";
import Grid from "../Grid/Grid";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";
import { MemoryArrowUpRightBox } from "@pictogrammers/memory";
import Subtitle from "../Subtitle/Subtitle";
import Carousel from "../Carousel/Carousel";

import buildericon from "../../assets/files/images/builder_icon.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const items = [
    {
      imageUrl: buildericon,
      altText: "Texte alternatif de l'image 1",
      caption: "Légende de l'image 1",
    },
    {
      imageUrl: buildericon,
      altText: "Texte alternatif de l'image 2",
      caption: "Légende de l'image 2",
    },
  ];

  return (
    <footer>
      <Grid className="footer-grid">
        <div className="grid-item">
          <Subtitle text="Nos liens" />
          <Link to="/" className="footer-link">
            <div className="yellow-bar">
              <Icon path={MemoryArrowUpRightBox} size={0.8} /> Lien 1
            </div>
          </Link>
          <Link to="/" className="footer-link">
            <div className="yellow-bar">
              <Icon path={MemoryArrowUpRightBox} size={0.8} /> Lien 2
            </div>
          </Link>
          <Link to="/" className="footer-link">
            <div className="yellow-bar">
              <Icon path={MemoryArrowUpRightBox} size={0.8} /> Lien 3
            </div>
          </Link>
        </div>
        <div className="grid-item">
          <Subtitle text="Informations" />
        </div>
        <div className="grid-item">
          <Subtitle text="Nos réseaux" />
          <Carousel items={items} />
        </div>
      </Grid>
      <div className="footer-content">
        <div className="left-content">
          <p>Eliaze &copy; {currentYear}</p>
        </div>
        <div className="right-content">
          <p>Nous ne sommes pas affiliés à Mojang AB.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
