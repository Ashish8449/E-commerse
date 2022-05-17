import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { signInFirebase, signUpUser } from "../Reducers/localStorage";
const LoginBox = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 20px 10px;
  display: flex;
  align-items: center;
  padding: 10px 10px;
  justify-content: center;
  @media only screen and (min-width: 799px) {
    display: none;
  }
`;
const Form = styled.form`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 50px;
  height: 100%;
  width: clac(100vw - 30px);
  min-width: 310px;
  text-align: center;
  border-radius: 8px;
  input {
    border-radius: 4px;
  }

  button {
    margin-bottom: 10px;
  }
`;
export default function ResponsiveLogin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logIn, setLogin] = useState(true);
  const dispatch = useDispatch();
  const SignUPClickHandler = (e) => {
    e.preventDefault();
    if (logIn) {
      setLogin(false);
    } else {
      dispatch(
        signUpUser({
          name,
          password,
          email,
        })
      );
    }
  };
  const SignInHandler = (e) => {
    e.preventDefault();
    dispatch(
      signInFirebase({
        password,
        email,
      })
    );
  };
  return (
    <LoginBox>
      <div>
        <Form action="#">
          <h1> {logIn ? "Sign in" : " Create Account"}</h1>
          <div class="social-container">
            <a href="#" class="social">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social">
              <i class="fab fa-google-plus-g"></i>
            </a>
            <a href="#" class="social">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>
            {" "}
            {logIn
              ? "or use your account"
              : " or use your email for registration"}
          </span>
          {!logIn && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="#">Forgot your password?</a>
          {logIn && <button onClick={SignInHandler}>Sign In</button>}
          <button onClick={SignUPClickHandler}>Sign up</button>
          {!logIn && <button onClick={() => setLogin(true)}>Sign IN</button>}
        </Form>
      </div>
    </LoginBox>
  );
}
