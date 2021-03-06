import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { localStorageActions } from "../Reducers/localStorage";
import Favrate from "./Favrate";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { getDatabase, onValue, ref, set } from "firebase/database";
import ResponsiveNavBar from "../ResponsiveNavBar";

const Nav = styled.div`
  background-attachment: fixed;
  width: 100%;
  /* margin: 0px 10px; */

  ul {
    margin: 0;
  }

  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 5px 10px rgb(91 91 91 / 10%);
  img {
    width: 100px;
    height: 30px;
    margin-left: 20px;
  }
  @media (max-width: 800px) {
    align-items: center;
    padding: 0px;
  }
`;
const NavitemsBox = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  text-align: center;

  li {
    margin-right: 30px;
    border: 4px solid transparent;
    /* padding-bottom: 4px; */
    text-transform: uppercase;
    transition: ease-in-out 0.5s;
    border-radius: 4px;
  }
  a {
    font-size: 20px;
    color: black;
  }
  li:hover {
    border-bottom: 4px solid #ff2020;
    cursor: pointer;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;
const LoginBox = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  li {
    margin: 0 15px;
    position: relative;

    span {
      position: absolute;
      right: -12px;
      top: -11px;
      height: 18px;
      width: 18px;
      background: #ff2020;
      font-size: 10px;
      font-weight: 500;
      color: #fff;
      line-height: 18px;
      text-align: center;
      border-radius: 50%;
    }
  }
  @media (max-width: 800px) {
    display: none;
  }
`;
const Search = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  i {
    margin-left: 10px;
    font-size: 20px;
  }
  background: transparent;
  padding: 0px;
  margin: 0px;
  input {
    border-radius: 10px;
    background-color: transparent;
    border: none;
    padding: 3px 2px;
    border: 1px solid;
    margin: 0px 0;
    width: 100%;
  }
  button {
    padding: 0;
    margin: 0;
    background: transparent;
    border: none;
    color: #000;
    margin-left: 15px;
  }
  input:focus {
    outline: none;
  }
`;
const Hamburger = styled.div`
  i {
    font-size: 40px;
    margin-right: 20px;
    cursor: pointer;
  }
  & .bi-x-lg {
    font-size: 30px;
  }
  animation: jello;
  animation-duration: 0.2s;
  display: none;
  @media (max-width: 800px) {
    display: block;
  }
`;
const Button = styled.button`
  padding: 8px;
  border-radius: 8px;
  border: none;
  background: #ff2020;
  color: white;
  font-weight: 600;
  transition: ease-in 0.1s;
  &:hover {
    opacity: 0.8;
  }
`;

export default function Navbar() {
  // const  idToken=0;
  const data = useSelector((state) => state.local);
  const history = useNavigate();
  const [showNavbar, setNavBar] = useState(false);
  const [searchInput, setSearch] = useState("");
  const searchClickHandler = (e) => {
    e.preventDefault();

    history(`/search/${searchInput}`);
  };

  let uid = "";
  if (data.user.uid) uid = data.user.uid;
  const [showFav, setFav] = useState(false);

  const idToken = useSelector((state) => state.local.user);

  const currentUser = 0;

  const dispatch = useDispatch();

  const fav = useSelector((state) =>
    currentUser >= 0 ? state.local.wishList : []
  );
  const cartItems = useSelector((state) =>
    currentUser >= 0 ? state.local.cartItems : []
  );
  const hamburgerHandler = (e) => {
    setNavBar(!showNavbar);
  };

  return (
    <>
      <Nav>
        <img src="/images/logoimg.webp" alt="" />
        <NavitemsBox>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/shop">MEN???S</Link>
          </li>

          <li>
            <Link to="/shop/women's">WOMEN???S</Link>
          </li>
        </NavitemsBox>
        <LoginBox>
          <li>
            <Search onSubmit={searchClickHandler}>
              <input
                type="text"
                value={searchInput}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />

              <button className="fa fa-search" aria-hidden="true"></button>
            </Search>
          </li>
          {!idToken && (
            <li>
              {" "}
              <Link to="/login">Login / Register </Link>{" "}
            </li>
          )}

          {
            <li
              onClick={() => {
                setFav(!showFav);
              }}
              style={{
                cursor: "pointer",
              }}
            >
              <i
                className={`bi  ${showFav ? "bi-heart-fill" : "bi-heart"}`}
                aria-hidden="true"
              ></i>
              {fav.length > 0 && <span>{fav.length}</span>}
            </li>
          }
          {
            <li>
              <Link to="/cartItems">
                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
              </Link>
              {cartItems.length > 0 && <span>{cartItems.length}</span>}
            </li>
          }
          {idToken && (
            <li>
              {" "}
              <Button
                onClick={() => {
                  dispatch(localStorageActions.logOutHandler());
                }}
              >
                Log Out
              </Button>
            </li>
          )}
        </LoginBox>
        <Hamburger onClick={hamburgerHandler}>
          {!showNavbar && (
            <i className="bi bi-list" onClick={hamburgerHandler}></i>
          )}
          {showNavbar && (
            <i className="bi bi-x-lg" onClick={hamburgerHandler}></i>
          )}
        </Hamburger>
      </Nav>
      {showFav && <Favrate showFav={showFav} setFav={setFav} />}
      {showNavbar && (
        <ResponsiveNavBar
          show={showNavbar}
          setshow={setNavBar}
          showFav={showFav}
          setFav={setFav}
        />
      )}
    </>
  );
}
