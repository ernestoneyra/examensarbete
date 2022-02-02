import React, { useState } from "react";
import "./Background.css";

const Background = (props) => {
  const [selectedBullet, setSelectedBullet] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  const BackgroundHeading = (props) => {
    <div className="background-heading">
      <div className="background-main-heading">
        <div className="heading-bullet">
          <span>{props.heading ? props.heading : ""}</span>
          {props.duration ? (
            <div className="heading-date">{props.duration}</div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="background-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""} </span>
        </div>
        <div className="background-heading-description">
          <span>{props.description ? props.description : ""} </span>
        </div>
      </div>
    </div>;
  };

  return (
    <>
      <div>Background</div>
      <div className="background-container screen-container">
        <div className="background-content"></div>
      </div>
    </>
  );
};

export default Background;
