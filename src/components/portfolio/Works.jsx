import React from "react";
import "./works.css";
import { projectsData } from "./Data";
import { projectsNav } from "./Data";
import WorkItem from "./WorkItem";
import { useState } from "react";
import { useEffect } from "react";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };
  return (
    <div>
      <div className="works__filter">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => handleClick(e, index)}
              className={` works__item ${active === index && "active-work"} `}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="works__container container grid">
        {projects.map((item) => {
          return <WorkItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
