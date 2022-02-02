import React from "react";
import "./Portfolio.css";
import { UilGithub } from "@iconscout/react-unicons";
import Carousel from "react-bootstrap/Carousel";

const Portfolio = ({ projects }) => {
  //console.log("portfolio", projects);

 

   const mappedProjects2 = () => {
    return projects.map((project, i) => {
      let { title, description, duration, image, link, subHeading, tutorial } =
        project;

      return (
        <div key={i} className="projects-outer text">
          <img src={image} alt="first slide of projects" />
          <div>
            <h2>{title}</h2>
            <span>{subHeading}</span>
          </div>
          <div className="description">
            <span className="description-text">{description} </span>
          </div>
          <div className="footer">
          <span>{`${duration}  ${tutorial}`}</span>
            <a href={link}>
              <UilGithub size="30" color="#fff" />
            </a>{" "}
          
          </div>
        </div>
      );
    });
  }; 

  const mappedProjects = () => {
    return (
      <Carousel>
        {projects.map((project) => (
          <Carousel.Item>
            <div key={project._id} className="projects-outer text">
              <img
                className="d-block w-100"
                src={project.image}
                alt="first slide of projects"
              />

              <div>
                <h2>{project.title}</h2>
                <span>{project.subHeading}</span>
              </div>

              <div className="description">
                <span className="description-text">{project.description} </span>
              </div>

              <div className="footer">
              <span>{`${project.duration}  ${project.tutorial}`}</span>
              
                <a href={project.link} className="icon">
                  <UilGithub size="30" color="#fff" />
                </a>{" "}
               
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  };

  return (
    <>
      <div className="container">
       
        
        <div className="center">
        <div className="visible" >{mappedProjects()}</div>
        <div className="hidden">{mappedProjects2()} </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
