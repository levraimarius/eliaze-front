import React, { useState } from "react";
import "./Header.scss";
import Icon from "@mdi/react";
import { mdiContentCopy } from "@mdi/js";
import { MemoryCheck } from "@pictogrammers/memory";

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
};

const Header = () => {
  const ipAddress = "PLAY.ELIAZE.FR";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copyToClipboard(ipAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <header>
      <div className="header-content">
        <div className="header-text">
          <div className="header-info">
            <h1>Eliaze &#8226; 1.20.x</h1>
            <p>Un des meilleur serveur Semi-RP / RPG français !</p>
            <div
              className={`header-ip-address ${copied ? "copied" : ""}`}
              onClick={handleCopy}
            >
              <div>
                <p>{ipAddress}</p>
              </div>
              <Icon
                path={copied ? MemoryCheck : mdiContentCopy}
                className="copy-icon"
                size={0.7}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
