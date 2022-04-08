import React from "react";
import styled from "styled-components";
const Card = styled.div`
  width: calc(30% - 20px);
  /* height: 400px; */

  /* margin: 0 5px; */
  position: relative;
  transition: 0.5s;
  img {
    width: 100%;
    /* height: 400px; */


    transition: 0.5s;
    height: auto;
    object-fit: contain;
    position: relative;
    box-shadow: inset(0px 10px 1px 1px);
  }
  button {
    display: none;
  }

  &:hover {
    button {
      transition: 0.5s;
      display: block;
    }
    img {
      transform: scale(1.1);
    }
    div {
      bottom: -10px;
    }
  }

  @media (max-width: 766px) {
    min-width: 400px;
    margin: 30px;
    padding: 10px;
    text-align: center;
  


  }

`;
const Content = styled.div`
  position: absolute;
  bottom: 5px;

  width: 100%;
  color: white;
  font-weight: bolder;
  transition: 0.5s;
  font-size: 25px;
  text-align: center;
`;
const Button = styled.button`
  background: #ff2020;
  font-weight: 500;
  font-size: 20px;
  border-radius: 4px;

  color: white;

  transition: 8s;
  transform: translateY(-5px);
  display: block;
  width: 140px;
  padding: 10px 10px;
  border: none;
  font-size: 20px;
  padding: 5px;
  margin: 10px auto;

  text-align: center;
  
`;
export default function card(props) {
  const { img, text } = props;
  return (
    <Card>
      <img src={img} alt="" srcset="" />
      <Content>
        {text}
        <Button>Shop Now</Button>
      </Content>
    </Card>
  );
}
