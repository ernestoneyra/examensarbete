import React from "react";
import "./Portfolio.css";
import { UilGithub } from "@iconscout/react-unicons";
import Carousel from "react-bootstrap/Carousel";

const Portfolio = ({ projects }) => {
  //console.log("portfolio", projects);

  const mappedProjects2 = () => {
    return projects.map((project, i) => {
      let {
        title,
        description,
        duration,
        image,
        link,
        subHeading,
        tutorial,
        alt,
      } = project;

      return (
        <>
          <div key={i} className="projects-outer ">
            <img src={image} alt={alt} />
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
        </>
      );
    });
  };

  const mappedProjects = () => {
    return (
      <>
      <div className="w-100">
      {/* <div className="portfolo-heading">
          obcaecati tenetur iure eius earum ut molestias architecto voluptate
          aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt
          quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas
          aliquid. Reprehenderit,
        </div> */}
        <Carousel>
          {projects.map((project, id) => (
            <Carousel.Item>
              <div key={id} className="projects-outer text">
                <img
                  className="d-block w-100 "
                  src={project.image}
                  alt={project.alt}
                />
                <div>
                  <h2>{project.title}</h2>
                  <span>{project.subHeading}</span>
                </div>
                <div className="description">
                  <span className="description-text">
                    {project.description}{" "}
                  </span>
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
      </div>
        
      </>
    );
  };

  return (
    <>
      <div className="container">
        <div className="center">
          <div className="visible">{mappedProjects()}</div>
          
        </div>
      </div>
      <div className="hidden2">
            <div>
              {/* <div className="portfolio-heading">
                obcaecati tenetur iure eius earum ut molestias architecto
                voluptate aliquam nihil, eveniet aliquid culpa officia aut!
                Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt
                ipsum debitis quas aliquid. Reprehenderit,
              </div> */}
            </div>
            <div>{mappedProjects2()}</div>{" "}
          </div>
    </>
  );
};

export default Portfolio;
