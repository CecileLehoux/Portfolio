import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Cécile Lehoux</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              A propos
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>
          <li>
            <a href="project" className="footer__link">
              Projet
            </a>
          </li>
        </ul>
        <div className="footer__social"></div>
        <span className="footer__copy">
          Cécile Lehoux - Tous droits réservés
        </span>
      </div>
    </footer>
  );
};

export default Footer;
