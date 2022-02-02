import React from "react";
import "./Portfolio.css";
import { Container, Row, Col } from "react-bootstrap";

import { UilGithub } from "@iconscout/react-unicons";

const Portfolio = ({ projects }) => {
  console.log("portfolio", projects);

  const mappedProjects = () => {
    return projects.map((project, i) => {
      let { title, description, duration, image, link, subHeading, tutorial } =
        project;
      console.log("image", image);
      return (
        <div key={i} className="projects-outer">
          <img src={image} alt="first slide of projects" />
          <div>
            <h2>{title}</h2>
            <span>{subHeading}</span>
          </div>
          <div className="description">
            <span className="description-text">{description} </span>
          </div>
<div className="footer"><p>
            Skapad år {duration}{" "}
            
            
          </p>
          <a href={link}>
              <UilGithub size="30" color="#fff" />
            </a>{" "}
          <p>{tutorial} </p></div>
          
        </div>
      );
    });
  };

  return (
    <>
      <div className="container">
        <div className="pages-background flex">My Portfolio</div>

        <div className="center">{mappedProjects()}</div>
      </div>
    </>
  );
};

export default Portfolio;
