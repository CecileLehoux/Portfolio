import React from "react";
import "./works.css";

const WorksItems = ({ item }) => {
  return (
    <div className="works__card" key={item.id}>
      <a href={item.link} target="_blank">
        <img src={item.image} alt={item.title} className="works__img" />
      </a>
      <h3 className="works__title">{item.title}</h3>
      <a href={item.link} className="works__button">
        Demo <i className="bx bx-right-arrow-alt works__button-icon"></i>
      </a>
    </div>
  );
};

export default WorksItems;
