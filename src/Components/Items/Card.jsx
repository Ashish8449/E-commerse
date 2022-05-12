import React from "react";
import styled from "styled-components";
const Item = styled.div`
  min-width: 250px;
  height: 300px;
  img {
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
  }
  @media (max-width: 700px) {
    width: calc(33% - 10px);
    margin: 10px;
    h2 {
      margin: 10px 0;
      font-size: 14px;
    }
  }
  @media (max-width: 500px) {
    width: calc(100% - 12px);
    margin: 6px;
    text-align: center;
  }
  @media (max-width: 350px) {
    width: calc(100% - 5px);
    margin: 5px;
    min-width: calc(100vw - 20px);
    img {
      min-width: 300px;
    }
    /* text-align: center; */
  }
`;
export default function Card(props) {
  const { img } = props;
  return (
    <Item>
      <img data-aos="zoom-out-down" src={img} alt="" />
    </Item>
  );
}
