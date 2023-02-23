import React from "react";
import Star from "../../assets/star-checked.svg";
import EmptyStar from "../../assets/star.svg";
import "./skills.css";

const Stars = ({ rate }) => {
  const data = [];

  for (let i = 0; i < 5; i++) {
    if (i < rate) {
      data.push(<img className="star" src={Star} alt={"star"} />);
    } else {
      data.push(<img className="star" src={EmptyStar} alt={"star"} />);
    }
  }

  return <div>{data}</div>;
};

export default Stars;
