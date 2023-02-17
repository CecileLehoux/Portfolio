import React from "react";
import "./about.css";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>
        <h3 className="about__title">Experiences</h3>
        <span className="about__subtitle">8 ans dans le monde du digital</span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Techniques </h3>
        <span className="about__subtitle">React, NextJs, VueJs</span>
      </div>

      <div className="about__box">
        <i class="bx bx-support about__icon"></i>
        <h3 className="about__title">Compétences</h3>
        <span className="about__subtitle">Bla Bla Bla</span>
      </div>
    </div>
  );
};

export default Info;
