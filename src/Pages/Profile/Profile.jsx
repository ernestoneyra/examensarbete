import React from "react";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const facebook = <FontAwesomeIcon icon={["fab", "facebook"]} />;
const linkedin = <FontAwesomeIcon icon={["fab", "linkedin"]} />;
const github = <FontAwesomeIcon icon={["fab", "github"]} />;

export default function Profile() {
  return (
    <>
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colz">
              <div className="colz-icon">
                <a href="https://www.facebook.com/ernesto.neyra.18/">
                  {facebook}
                </a>
                <a href="https://github.com/ernestoneyra">{github}</a>
                <a href="https://www.linkedin.com/in/ernesto-neyra">
                  {linkedin}
                </a>
              </div>
            </div>

            <div className="profile-details-name">
              <span className="primary-text">
                Hej, mitt namn är{" "}
                <span className="highlighted-text">Ernesto Neyra</span>
              </span>
            </div>
            <div className="profile-details-role">
             
              <span className="primary-text">
                <h1>Junior Frontend Utvecklare</h1>
              </span>

              <span className="profile-role-tagline">
                En framtida talang i att bygga applikationer i front och back end.
              </span>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
      </div>
    </>
  );
}
