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
  right: 0px;
  max-width: 360px;
  width: calc(100vh - 10px
    );
  border-radius: 2px;
  z-index: 1000;
  background: hsl(0deg 0% 80% / 98%);
  max-height: 100vh;

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
`;

export default function Favrate(props) {
  const { showFav, setFav } = props;

  const wishList = useSelector((state) => state.local.wishList);

  return (
    <>
      <Fav
        onClick={() => {
          setFav(!showFav);
        }}
      >
        <h2>My Wishlist</h2>
        {wishList.length === 0 ? <h4> Your Wishlist is empty!!🙆‍♂️ </h4> : ""}
        {wishList.map((item, key) => (
          <Card key={key} item={item} showFav={showFav} setFav={setFav} />
        ))}
      </Fav>
    </>
  );
}
