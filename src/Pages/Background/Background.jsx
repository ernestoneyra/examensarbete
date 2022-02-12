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
              <ProgressBar  now={ratingPercentage} />
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
            <div>{title} </div>
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
      let { workplace, role, duration, did, city } = work;

      return (
        <>
          <div key={i}>
            <div>
              {workplace}, {city}{" "}
            </div>
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
            <div className="h5">Färdigheter</div>
            <div className="background-skills">
              <div> {mappedSkillDetails()}</div>
            </div>
            <br />
            <div className="h5">Utbildning</div>
            <div className="background-education">
              <div> {mappedEducation()} </div>
            </div>{" "}
            <br />
            <div className="h5">Jobb</div>
            <div className="background-work">
              <div>{mappedWorks()} </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Background;
