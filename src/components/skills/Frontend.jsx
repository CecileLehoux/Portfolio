import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Front-end</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Avancé</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Avancé</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Javascript</h3>
              <span className="skills__level">Intermediaire</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Intermediaire</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Basique</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">TypeScript</h3>
              <span className="skills__level">Intermediaire</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
