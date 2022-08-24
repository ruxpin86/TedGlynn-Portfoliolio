import React from "react";
import "./projects.css";

export default function Projects({ img, link, desc, git }) {
  return (
    <div className="project-wrap">
      <div className="project">
        <div className="project-header">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="" className="project-img"></img>
        </a>
      </div>
      <div className="project-desc">
        <a href={git} target="_blank" rel="noreferrer">
          <p>{desc}</p>
        </a>
      </div>
    </div>
  );
}
