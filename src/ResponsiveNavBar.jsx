import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { keyframes } from "styled-components";

const Nav = styled.div`
  animation: fadeInLeftBig;
  background: #f5f5f5;
  animation-duration: 0.5s;
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
  }
  a {
    font-size: 20px;
    color: black;
  }
  li:hover {
    /* border-bottom: 4px solid #ff2020; */
    cursor: pointer;
  }

`;
export default function ResponsiveNavBar(props) {
  const {show, setshow}= props;
  return (
    <Nav onClick={()=>setshow(!show)}>
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
        </NavitemsBox>
    </Nav>
  );
}
