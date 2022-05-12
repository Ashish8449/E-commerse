import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { localStorageActions } from "./Reducers/localStorage";

const Nav = styled.div`
  animation: fadeInLeftBig;
  background: #f5f5f5;
  width: 100vw;
  animation-duration: 1s;
  position: absolute;
  z-index: 10000;
  min-height: 100vh;
`;
const NavitemsBox = styled.ul`
  list-style: none;

  justify-content: center;
  flex-grow: 1;
  text-align: center;
 
  li {
    margin-right: 30px;
    border: 4px solid transparent;
    /* padding-bottom: 4px; */
    text-transform: uppercase;
    transition: ease-in-out 0.5s;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    min-height: calc(100vh / 6 - 30px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    font-size: 20px;
    color: black;
  }
  li:hover {
    cursor: pointer;
  }
`;
const Button = styled.button`
  padding: 12px 18px;
  border-radius: 12px;
  border: none;
  background: #ff2020;
  color: white;
  font-weight: 600;
  transition: ease-in 0.1s;
  &:hover {
    opacity: 0.8;
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
  pointer-events: none;
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
export default function ResponsiveNavBar(props) {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [searchInput, setSearch] = useState("");
  const { show, setshow, showFav, setFav } = props;
  const fav = useSelector((state) => state.local.wishList);
  const idToken = useSelector((state) => state.local.user);
  const searchClickHandler = (e) => {
    e.preventDefault();

    history(`/search/${searchInput}`);
  };
  return (
    <Nav onClick={() => setshow(!show)}>
      <NavitemsBox>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/shop">MEN’S</Link>
        </li>

        <li>
          <Link to="/shop">WOMEN’S</Link>
        </li>
      
        <li>
          <Link to="/cartItems">
            Shoping Bag{" "}
            <i className="fa fa-shopping-bag" aria-hidden="true"></i>
          </Link>
        </li>
        {
          <li
            onClick={() => {
              console.log(showFav);
              setFav(!showFav);
            }}
            style={{
              cursor: "pointer",
            }}
          >
            <Link to="">
              WishList{" "}
              <i
                className={`bi  ${showFav ? "bi-heart-fill" : "bi-heart"}`}
                aria-hidden="true"
              ></i>
            </Link>
          </li>
        }
        {!idToken && (
          <li>
            {" "}
            <Link to="/login">Login / Register </Link>{" "}
          </li>
        )}
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
      </NavitemsBox>
    </Nav>
  );
}
