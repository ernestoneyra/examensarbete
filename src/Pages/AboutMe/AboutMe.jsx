import React from "react";
import "./AboutMe.css";
import aboutMeImg from "../../Materials/images/profilephoto.jpg";

const AboutMe = ({ interests, profiles }) => {
  //console.log(profiles[0].traits)

  const mappedInfo = () => {
    return profiles.map((profile, i) => {
      let { description, name, traits } = profile;
      let { one, two, three} = traits;

      return (
        <>
          <div key={i}>
            <h1>{name}</h1>
            <p>{description} </p>
            <ul className="aboutme-list">
              <li>
                <span>{one} </span>
              </li>
              <li>
                <span>{two}</span>{" "}
              </li>
              <li>
                <span>{three}</span>{" "}
              </li>
            </ul>
          </div>
        </>
      );
    });
  };

  return (
    <>
      <div className="container">
        <div className="aboutme-outer">
          <div className="aboutme-central">
            <div className="aboutme-mapped">
              <div>{mappedInfo()} </div>
              <div className="aboutme-resp-button">
                <a href="Ernesto.Neyra.CV.pdf" download="Ernesto.Neyra.CV.pdf">
                  <button className="aboutme-download-btn">
                    <span>Hämta CV</span>
                  </button>
                </a>{" "}
              </div>
            </div>

            <div>
              <img
                src={aboutMeImg}
                alt="aboutme-profile"
                className="aboutme-img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
