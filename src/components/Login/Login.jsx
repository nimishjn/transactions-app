import { Button, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  ForgotPassword,
  HLine,
  LoginContainer,
  LoginForm,
  LoginHeading,
  LoginWrap,
  SignupWrap,
} from "./LoginElements";

function Login() {
  return (
    <LoginContainer>
      <LoginWrap>
        <LoginHeading>Login</LoginHeading>
        <LoginForm>
          <TextField
            id="loginEmail"
            label="Email address"
            variant="outlined"
            type="email"
          />
          <TextField
            id="loginPassword"
            label="Password"
            variant="outlined"
            type="password"
          />
          <ForgotPassword>Forgot Password?</ForgotPassword>
          <Button variant="contained" type="submit">
            Login
          </Button>
        </LoginForm>
        Login with Google
        <HLine />
        <SignupWrap>
          <p>Dont have an account?</p>
          <Link to="/signup">
            <Button variant="outlined">Signup Now!</Button>
          </Link>
        </SignupWrap>
      </LoginWrap>
    </LoginContainer>
  );
}

export default Login;
