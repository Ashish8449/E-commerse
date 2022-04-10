import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Nav = styled.div`
  background-attachment: fixed;
  width: 100%;
  padding-top: 15px;
  padding: 10px;
  padding-top: 20px;

  display: flex;
  align-items: flex-start;
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
const Search = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    margin-left: 10px;
  }
  input {
    border-radius: 10px;
  }
`;
const Hamburger = styled.div`
  i {
    font-size: 40px;
    margin-right: 20px;
    cursor: pointer;
  }
  display: none;
  @media (max-width: 800px) {
    display: block;
  }
`;
export default function Navbar() {
  const fav = useSelector((state) => state.ui.favItems);
  const cartItems = useSelector((state) => state.ui.cartItems);
  return (
    <Nav>
      <img src="images/logoimg.webp" alt="" />
      <NavitemsBox>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/shop">MEN’S</Link>
        </li>
        <li>
          <Link to="/shop">Baby's Fashion</Link>
        </li>
        <li>
          <Link to="/shop">WOMEN’S</Link>
        </li>
      </NavitemsBox>
      <LoginBox>
        {/* <Search>
          <input type="text" />
          <i className="fa fa-search" aria-hidden="true"></i>
        </Search> */}
        <li>Login / Register</li>

        <li>
          <i className="fa fa-heart-o" aria-hidden="true"></i>
          {fav.length > 0 && <span>{fav.length}</span>}
        </li>
        <li>
          <i className="fa fa-shopping-bag" aria-hidden="true"></i>
          {cartItems.length>0 && <span>{cartItems.length}</span>}
        </li>
      </LoginBox>
      <Hamburger>
        <i className="bi bi-list"></i>
      </Hamburger>
    </Nav>
  );
}