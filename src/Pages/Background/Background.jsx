import React from "react";
import { ProgressBar } from "react-bootstrap";
import { programmingSkillsDetails } from "../../Constants/staticData";
import "./Background.css";

const Background = ({ works, educations }) => {
  /* console.log("interests", interests)
  console.log("works", works)
  console.log("educations", educations) */
  console.log("programmingSkillsDetails", programmingSkillsDetails);

  const mappedSkillDetails = () => {
    return programmingSkillsDetails.map((skills, i) => {
      let { skill, ratingPercentage } = skills;
      return (
        <>
          <div key={i} className="background-skills-container">
            <div className="background-skills-skills">{skill} </div>
            <div className="background-skills-rating">
              <ProgressBar now={ratingPercentage} />
            </div>
          </div>
        </>
      );
    });
  };

  const mappedEducation = () => {
    return educations.map((education, i) => {
      let { title, city, subHeading, description, duration } = education;

      return (
        <>
          <div key={i} className="">
            <div className="h5">{title} </div>
            <div>{subHeading} </div>
            <div className="">{description} </div>
            <div>
              {city} {duration}{" "}
            </div>
            <br />
          </div>
        </>
      );
    });
  };

  const mappedWorks = () => {
    return works.map((work, i) => {
      let { workplace, role, duration, did } = work;

      return (
        <>
          <div key={i}>
            <h5>{workplace} </h5>
            <div>
              {role} <div>{did} </div>
            </div>
            <div>{duration} </div>
            <br />
          </div>
        </>
      );
    });
  };

  return (
    <>
      <div className="container">
        <div className="background-outer">
          <main className="background-items">
            <div className="background-skills">
              <h4>Färdigheter</h4>
              <div> {mappedSkillDetails()}</div>
            </div>
            <br />
            <div className="background-education">
              <h4>Utbildning</h4>
              <div> {mappedEducation()} </div>
            </div>{" "}
            <br />
            <div className="background-work">
              <h4>Jobb</h4>
              <div>{mappedWorks()} </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Background;
