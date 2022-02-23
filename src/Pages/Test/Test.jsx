import React, { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./Test.css";

const Test = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <>
      <div className="container d-grid">
        <div>Test</div>

        <button className="test-button" onClick={() => setShow(!show)}>
          TEST
        </button>
        <div className="hello">
          {show && (
            <ul className="hello">
              <li>HEllo</li>
              <ProgressBar now={60} />
              <li>To</li>
              <ProgressBar now={20} label={`60%`} />
              <li>You</li>
              <ProgressBar animated now={90} />
              <li>There</li>
            </ul>
          )}
        </div>
        <button className="test-button" onClick={() => setShow2(!show2) }>
          Others
        </button>
        <div>
          {show2 && (
            <div>
              <h1>Hello to you</h1>
              <h2>Hello back there</h2>
              <h3>What you doing ?</h3>
              <h4>Nothing much you?</h4>4<h5>Nothing hneither here</h5>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Test;
