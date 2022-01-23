import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  HLine,
  LoginWrap,
  SignupContainer,
  SignupForm,
  SignupHeading,
  SignupWrap,
} from "./SignupElements";
import { responseCodes } from "../../util/responseCodes";
import { ToastContext } from "../../contexts/ToastContext";
import { requestSignup } from "../../api/requests";

function Signup() {
  const history = useHistory();
  const { handleSnackOpen } = useContext(ToastContext);

  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupMobile, setSignupMobile] = useState("");
  const [signupBusinessName, setSignupBusinessName] = useState("");

  const signupFormSubmit = async (e) => {
    e.preventDefault();

    const response = await requestSignup({
      name: signupName,
      email: signupEmail,
      password: signupPassword,
      mobile: "+91" + signupMobile,
      businessName: signupBusinessName,
    });

    if (response.success) {
      localStorage.setItem("token", response.data.token);
      handleSnackOpen({
        variant: "success",
        message: responseCodes[response.data.code],
      });
      history.push("/login");
    } else {
      handleSnackOpen({
        variant: "error",
        message: responseCodes[response.data.code],
      });
    }
  };

  return (
    <SignupContainer>
      <SignupWrap>
        <SignupHeading>Signup</SignupHeading>
        <SignupForm onSubmit={signupFormSubmit}>
          <TextField
            id="signupName"
            label="Name"
            variant="outlined"
            type="text"
            value={signupName}
            onChange={(e) => setSignupName(e.target.value)}
            required
          />
          <TextField
            id="signupEmail"
            label="Email address"
            variant="outlined"
            type="email"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
            required
          />
          <TextField
            id="signupPassword"
            label="Password"
            variant="outlined"
            type="password"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
            required
          />
          <TextField
            id="signupMobile"
            label="Mobile Number (+91)"
            variant="outlined"
            type="tel"
            inputProps={{
              pattern: "^[1-9]{1}[0-9]{9}$",
              maxLength: 10,
              minLength: 10,
            }}
            value={signupMobile}
            onChange={(e) => setSignupMobile(e.target.value)}
            required
          />
          <TextField
            id="signupBusiness"
            label="Business Name"
            variant="outlined"
            type="text"
            value={signupBusinessName}
            onChange={(e) => setSignupBusinessName(e.target.value)}
          />
          <Button variant="contained" type="submit">
            Signup
          </Button>
        </SignupForm>
        Signup with Google
        <HLine />
        <LoginWrap>
          <p>Have an account already?</p>
          <Link to="/login">
            <Button variant="outlined">Login</Button>
          </Link>
        </LoginWrap>
      </SignupWrap>
    </SignupContainer>
  );
}

export default Signup;
