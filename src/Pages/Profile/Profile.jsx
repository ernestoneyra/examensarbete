import React from "react";
import "./Profile.css";
import profile from "../../Materials/images/profileimage.jpg";
import { UilFacebook, UilLinkedin, UilGithub } from "@iconscout/react-unicons";

const Profile = () => {
  return (
    <>
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colz">
              <div className="colz-icon">
                <a
                  href="https://www.facebook.com/ernesto.neyra.18/"
                  alt="facebook link"
                >
                  <UilFacebook color="#fff" className="icon" />
                </a>
                <a href="https://github.com/ernestoneyra" alt="github link">
                  <UilGithub color="#fff" className="icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ernesto-neyra"
                  alt="linkedin lik"
                >
                  <UilLinkedin color="#fff" className="icon" />
                </a>
              </div>
            </div>
            <main>
              <div className="profile-details-name">
                <span className="primary-text">Hej, mitt namn är {""}
                <span className="highlighted-text">Ernesto Neyra</span></span>
                
              </div>

              <div className="profile-details-role">
                <span className="primary-text">
                  <h1>Junior Frontend Utvecklare</h1>
                </span>

                <span className="profile-role-tagline">
                  En framtida talang i att bygga applikationer i front och back
                  end.
                </span>
              </div>
            </main>
          </div>
          <div className="profile-picture">
            <img
              src={profile}
              className="profile-picture-background"
              alt="profile"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
