import React from "react";
import Login from "../common/Login/Login";
import "./landing.css";

const Landing = () => {
  return <>
      <div className="landing-section">
          <h1>Store all your transactions in one place</h1>
          <Login />
      </div>
  </>;
};

export default Landing;
