import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";
import { keyframes } from "styled-components";
import Card from "./Card";
const showItems = keyframes`
0%{
    opacity: 0;
    transform:translateX(200px);
}
100%{
    opacity: 1;
    transform:translateX(0px);
}
`;

const Fav = styled.div`
  position: fixed;

  top: 0px;
  right: 5px;
  width: 360px;
  border-radius: 2px;
  z-index: 1000;
  background: hsl(0deg 0% 80% / 98%);
  max-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

  padding: 30px 20px;

  transition: all 0.5s ease;
  animation: ${showItems} 1s;
  background-color: #f5f5f5;

  height: 1000px;
  overflow-y: auto;
  overflow-x: hidden !important;
  h2 {
    margin-bottom: 40px;
  }
  @media only screen and (max-width: 400px) {
    padding: 10px 10px;
  }
`;

export default function Favrate(props) {
  const { showFav, setFav } = props;

  const wishList = useSelector((state) => state.local.wishList);
  console.log(wishList);

  return (
    <>
      <Fav
        onClick={() => {
          setFav(!showFav);
        }}
      >
        <h2>My Wishlist</h2>
        {wishList.length === 0 ? " NO items are found in the" : ""}
        {wishList.map((item, key) => (
          <Card key={key} item={item} showFav={showFav} setFav={setFav} />
        ))}
      </Fav>
    </>
  );
}
