import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import "./landing.css";

const Landing = () => {
  return (
    <>
      <div className="landing-section">
        <h1>Store all your transactions in one place</h1>
        <Link to="/login">
          <Button variant="contained">Login</Button>
        </Link>
        <Link to="/signup">
          <Button variant="contained">Create an Account</Button>
        </Link>
      </div>
    </>
  );
};

export default Landing;
