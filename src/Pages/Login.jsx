import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";
import styled from "styled-components";
import { localStorageActions, signInFirebase } from "../Reducers/localStorage";
import { Loader } from "./Home";
import "./Login.css";

const LoginBox = styled.div`
  min-height: 100vh;
  display: flex;

  justify-content: center;
  align-items: center;
  background: #f6f5f7;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
  margin: 30px 0;
`;

export default function Login() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const localData = useSelector((state) => state);

  const idToken = useSelector((state) => state.local.idToken);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 300);
  });
  if (idToken) {
    function writeUserData(userId, name, email, imageUrl) {
      console.log("run");
      const db = getDatabase();
      set(ref(db, "users/" + userId), {
        username: name,
        email: email,
        profile_picture: imageUrl,
      });
    }
    writeUserData(2, name, email, password);
  }
  const SignInClickHandler = (e) => {
    e.preventDefault();
    const container = document.getElementById("container");
    container.classList.toggle("right-panel-active");
  };

  const SignUPClickHandler = (e) => {
    e.preventDefault();
    const container = document.getElementById("container");
    container.classList.toggle("right-panel-active");
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
  const submitSignUpHandler = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("fill the form correctly");
      return;
    }
    console.log("signUP");
    dispatch(
      localStorageActions.signUpUser({
        id: -1,
        userCredentials: {
          userName: name,
          password,
          email,
        },
        wishList: [],
        cartItems: [],
      })
    );
    dispatch(localStorageActions.setInitalState(localData.local));
  };

  return (
    <>
      {idToken && <Navigate to="/" />}
      {loader && (
        <Loader>
          <img src="/images/Spinner-0.8s-223px.gif" alt="" />
        </Loader>
      )}
      <LoginBox>
        <div class="container" id="container">
          <div class="form-container sign-up-container">
            <form action="#" onSubmit={submitSignUpHandler}>
              <h1>Create Account</h1>
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
              <span>or use your email for registration</span>

              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
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
              <button>Sign Up</button>
            </form>
          </div>
          <div class="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
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
              <span>or use your account</span>
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
              <button onClick={SignInHandler}>Sign In</button>
            </form>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button class="ghost" id="signIn" onClick={SignInClickHandler}>
                  Sign In
                </button>
              </div>
              <div class="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button class="ghost" id="signUp" onClick={SignUPClickHandler}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </LoginBox>
    </>
  );
}
