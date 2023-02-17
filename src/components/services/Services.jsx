import React, { useState } from "react";
import "./services.css";

//use map to repeat services

const Services = () => {
  const services = {
    title: "Interface",
    description: "blab llchk   zhdksjdnkjhfkejrhfkjfnn ekjfamkjrb",
    info1: "blabla 1",
    info2: "blabla 1",
    info3: "blabla 1",
  };
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="skills">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">Ce que j'offre</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Développement <br /> web
            </h3>
            <span onClick={() => toggleTab(1)} className="services__button">
              En savoir plus
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
          </div>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Web</h3>
              <p className="services__modal-description">
                8ans d'expériences dans la gestion de projet
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Je développe des interfaces simples et ludiques
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Soucieuse de l'experience utilisateur
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Mettre en forme des applications web
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Interface <br /> UX/UI
            </h3>
            <span className="services__button" onClick={() => toggleTab(2)}>
              En savoir plus
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
          </div>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">UI/UX</h3>
              <p className="services__modal-description">
                8ans d'expériences dans la gestion de projet
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Je développe des interfaces simples et ludiques
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Soucieuse de l'experience utilisateur
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Mettre en forme des applications web
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">API</h3>
            <span onClick={() => toggleTab(3)} className="services__button">
              En savoir plus
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
          </div>
          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services__modal-title">API</h3>
              <p className="services__modal-description">
                8ans d'expériences dans la gestion de projet
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Je développe des interfaces simples et ludiques
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Soucieuse de l'experience utilisateur
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Mettre en forme des applications web
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
