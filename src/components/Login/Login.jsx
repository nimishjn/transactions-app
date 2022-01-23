import { Button, TextField } from "@mui/material";
import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { requestLogin } from "../../api/requests";
import {
  ForgotPassword,
  HLine,
  LoginContainer,
  LoginForm,
  LoginHeading,
  LoginWrap,
  SignupWrap,
} from "./LoginElements";
import { responseCodes } from "../../util/responseCodes";
import { ToastContext } from "../../contexts/ToastContext";

function Login() {
  const history = useHistory();
  const { handleSnackOpen } = useContext(ToastContext);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginFormSubmit = async (e) => {
    e.preventDefault();

    const response = await requestLogin({
      email: loginEmail,
      password: loginPassword,
    });

    if (response.success) {
      localStorage.setItem("token", response.data.token);
      handleSnackOpen({
        variant: "success",
        message: responseCodes[response.data.code],
      });
      history.push("/");
    } else {
      handleSnackOpen({
        variant: "error",
        message: responseCodes[response.data.code],
      });
    }
  };

  return (
    <LoginContainer>
      <LoginWrap>
        <LoginHeading>Login</LoginHeading>
        <LoginForm onSubmit={loginFormSubmit}>
          <TextField
            id="loginEmail"
            label="Email address"
            variant="outlined"
            type="email"
            required
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <TextField
            id="loginPassword"
            label="Password"
            variant="outlined"
            type="password"
            required
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <ForgotPassword>Forgot Password?</ForgotPassword>
          <Button variant="contained" type="submit">
            Login
          </Button>
        </LoginForm>
        Login with Google
        <HLine />
        <SignupWrap>
          <p>Don't have an account?</p>
          <Link to="/signup">
            <Button variant="outlined">Signup Now!</Button>
          </Link>
        </SignupWrap>
      </LoginWrap>
    </LoginContainer>
  );
}

export default Login;
