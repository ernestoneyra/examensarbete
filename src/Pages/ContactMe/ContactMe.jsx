import React, { useState } from "react";
import "./ContactMe.css";
import {
  UilMessage,
  UilFacebook,
  UilLinkedin,
  UilGithub,
  UilPhone,
  UilAt,
  UilLocationPinAlt,
} from "@iconscout/react-unicons";
import axios from "axios";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [star, setStar] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      console.log("data", data)
      const res = await axios.post(
        "http://localhost:4000/pastwork/contact",
        data
      );
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        setStar(true);
        setName("");
        setEmail("");
        setMessage("");
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        setStar(true);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="form-central-form">
          <div className="form-col">
            <h1 className="form-title">
              <span className="">Kontaktformulär</span>
            </h1>
            <a
              href="https://www.facebook.com/ernesto.neyra.18/"
              alt="facebook link"
            >
              <UilFacebook color="#fff" />
            </a>
            <a href="https://github.com/ernestoneyra" alt="github link">
              <UilGithub color="#fff" />
            </a>
            <a
              href="https://www.linkedin.com/in/ernesto-neyra"
              alt="linkedin lik"
            >
              <UilLinkedin color="#fff" />
            </a>
          </div>
          
          <div className="form-back-form">
         
            <div className="form-img-back">
            <div className="form-info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? </div>
              <div className="form-phone-icon">
                <UilPhone href="+46762823562" /> +46 762823562
              </div>
              <div className="form-email-icon">
                <a href="mailto:ernestoneyra31@gmail.com">
                  <UilAt
                    onClick={(href) =>
                      (href = "mailto:ernestoneyra31@gmail.com")
                    }
                  />{" "}
                  ernestoneyra31@gmail.com
                </a>
              </div>
              <div className="form-location-icon">
                <UilLocationPinAlt /> Sundsvall, Sverige
              </div>
              
            </div>
           

            <form onSubmit={submitForm}>
              <p>{banner}</p>

              <label htmlFor="name">
                Name {star ? <span className="star">*</span> : ""}
              </label>
              <input
                id="name"
                type="name"
                value={name}
                placeholder="Namn"
                onChange={handleName}
              />

              <label htmlFor="email">
                Email {star ? <span className="star">*</span> : ""}
              </label>
              <input
                id="email"
                type="email"
                value={email}
                placeholder="Email address"
                onChange={handleEmail}
              />

              <label htmlFor="message">
                Meddelade {star ? <span className="star">*</span> : ""}
              </label>
              <textarea
                id="message"
                type="message"
                value={message}
                placeholder="Skriv ett medddelande"
                onChange={handleMessage}
              />

              <div>
                <button type="submit" className="form-send-btn">
                  <span>Skicka</span> <UilMessage />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
