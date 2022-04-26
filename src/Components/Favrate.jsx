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
  position: absolute;
  top: 85px;
  right: 0;
  width: 360px;
  border-radius: 2px;
  z-index: 1000;
  background: hsl(0deg 0% 80% / 98%);
  min-height: 100vh;

  overflow: hidden;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

  padding: 30px 20px;

  transition: all 0.5s ease;
  animation: ${showItems} 1s;
  background-color: #f5f5f5;

  height: 1000px;
  overflow-y: auto;
  overflow-x: hidden;
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    /* margin-top: 10px; */
    margin-bottom: 100px;
   
}

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #ff4b2b;
    opacity: 0.8 !important;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 75, 43, 0.735);
    opacity: 0.8;
  
  }
`;

export default function Favrate(props) {
  const {showFav, setFav}=props;

  const wishList = useSelector((state) => state.local.wishList);
  console.log(wishList);

  return (
    <>
      <Fav>
        {wishList.length===0 ? " NO items are found in the": ""}
        {wishList.map((item, key) => (
          <Card key={key} item={item} showFav={showFav} setFav={setFav} />
        ))}
      </Fav>
    </>
  );
}
