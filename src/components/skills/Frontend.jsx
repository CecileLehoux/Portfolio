import React from "react";
import Stars from "./Stars";

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
              <Stars rate={4} />
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">CSS</h3>
              <Stars rate={4} />
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Javascript</h3>
              <Stars rate={4} />
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">React</h3>
              <Stars rate={4} />
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Next Js</h3>
              <Stars rate={3} />
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">TypeScript</h3>
              <Stars rate={3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
