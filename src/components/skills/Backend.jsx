import React from "react";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Back-end</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Next Js</h3>
              <span className="skills__level">Intermediaire</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Node Js</h3>
              <span className="skills__level">Basique</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Express</h3>
              <span className="skills__level">Basique</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Basique</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Prisma</h3>
              <span className="skills__level">Basique</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">GraphQL</h3>
              <span className="skills__level">Basique</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
