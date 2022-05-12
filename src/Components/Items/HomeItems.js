import React from "react";
import Card from "./Card";
import styled from "styled-components";

const Items = styled.div`
  padding: 10px 50px;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & div {
    margin: 10px;
    /* width: calc(20% - 20px); */
  }
  @media (max-width: 600px) {
    /* padding: 10px 20px; */
  }
`;

export default function Box(props) {
  const { title, imgs } = props;

  // console.log(props);
  return (
    <>
      <h2>{title} </h2>
      <Items data-aos="flip-right">
        {{ imgs } && imgs.map((item, key) => <Card key={key} img={item} />)}
      </Items>
    </>
  );
}
