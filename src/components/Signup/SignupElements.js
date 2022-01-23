import styled from "styled-components";

export const SignupContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(223, 223, 223);
`;

export const SignupWrap = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  border-radius: 1rem;
  background: white;
  width: 400px;

  @media screen and (max-width: 500px) {
    width: 90%;
    padding: 1rem;
  }
`;

export const SignupHeading = styled.h1`
  font-size: 2rem;
`;

export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const HLine = styled.hr`
  height: 1px;
  width: 100%;
  border: none;
  background-color: gray;
`;

export const LoginWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;