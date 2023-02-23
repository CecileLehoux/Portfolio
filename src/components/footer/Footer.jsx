import React from "react";
import Heart from "../../assets/heart.png";
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
            <a href="#skills" className="footer__link">
              Compétences
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>
        </ul>
        <div className="footer__social"></div>
        <span className="footer__copy">
          Cécile Lehoux - Tous droits réservés
        </span>
        <div className="footer__message">
          <div className="typewriter">
            <h3>
              Merci de votre visite{" "}
              <img width={15} src={Heart} alt={"Merci de votre visite"} />{" "}
            </h3>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
