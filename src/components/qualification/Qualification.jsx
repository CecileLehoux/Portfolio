import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Expériences</h2>
      <span className="section__subtitle"></span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Formations
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Expériences
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Formation Développeur Web et Mobile Toulouse
                </h3>
                <span className="qualification__subtitle">
                  Wild Code School
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021-2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Formation Webmaster Diplômante
                </h3>
                <span className="qualification__subtitle">Saliège - Balma</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2013-2014
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Licence Information et Communication
                </h3>
                <span className="qualification__subtitle">IEC - Pau</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2012-2013
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  BTS communication des Entreprises
                </h3>
                <span className="qualification__subtitle">
                  Saint Dominique - Balma
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2010-2012
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Développeuse Front-End</h3>
                <span className="qualification__subtitle">Kaduceo</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022-2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Développeuse Fullstack Junior
                </h3>
                <span className="qualification__subtitle">
                  Wild Code School
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021-2022
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Chef de projet digital <br /> Co-fondatrice du Collectif
                  Sauvage
                </h3>
                <span className="qualification__subtitle">
                  Collectif Sauvage
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021-2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Développeuse Fullstack Junior
                </h3>
                <span className="qualification__subtitle">
                  Wild Code School
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021-2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
