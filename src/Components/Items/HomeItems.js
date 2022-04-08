import React from "react";
import Card from "./Card";
import styled from "styled-components";

const Items = styled.div`
  padding: 10px 50px;

  h2 {
    margin: 10px 0px;
    text-transform: uppercase;
    color: #3e4152;
    letter-spacing: 0.15em;
    font-size: 1.8em;
    margin: 10px 20px;
    max-height: 5em;
    font-weight: 500;
  }
  div {
    display: flex;
    justify-content: space-evenly;
    padding: 10px 10px;
    flex-wrap: wrap;
  }
  /* @media (max-width: 575px) {

    
  } */
  @media (max-width: 600px) {
    padding: 10px 20px;
  }
`;

export default function Box(props) {
  const { title, imgs } = props;
 
  // console.log(props);
  return (
    <Items>
      <h2>{title} </h2>
      <div>
        {{ imgs } && imgs.map((item, key) => <Card key={key} img={item} />)}
      </div>
    </Items>
  );
}
