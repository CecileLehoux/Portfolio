import React from "react";

import Works from "./Works";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Mes dernières réalisations</span>
      <Works />
      <div className="portfolio__container container grid"></div>
    </section>
  );
};

export default Portfolio;
