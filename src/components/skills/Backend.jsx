import React from "react";
import Stars from "./Stars";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Back-end</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Node Js</h3>
              <Stars rate={3} />
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Express</h3>
              <Stars rate={3} />
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Mongo DB</h3>
              <Stars rate={3} />
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Git</h3>
              <Stars rate={3} />
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Prisma</h3>
              <Stars rate={3} />
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">GraphQL</h3>
              <Stars rate={2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
