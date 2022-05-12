import React from "react";
import styled from "styled-components";

const SliderBox = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 80px);
  padding-right: 100px;
  justify-content: ${(props) => props.position};
  background: url(${(props) => props.bg}) center center fixed;

  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: relative;

  align-items: center;
  @media (max-width: 380px) {
    background-position: ${(props) => (!props.position ? "100%" : "18%")};
    padding: 0 30px;
    
  }
`;
const Content = styled.div`
  align-items: center;
  justify-content: flex-end;
  max-width: 400px;
  text-align: center;
  margin: 0px 10vw;
  h4 {
    color: #ff2020;
    font-family: "Clicker Script", cursive;
    font-size: 50px;
    line-height: 1.2;
    font-weight: 400;

    margin-bottom: 3px;
  }
  p {
    line-height: 33px;
    color: #74706b;
  }
  @media (max-width: 380px) {
    margin: 0px 10px;
    margin: auto;
  }
`;
const Button = styled.button`
  padding: 10px;
  border-radius: 4px;
  border: none;
  background: #ff2020;
  color: white;
  font-weight: 600;
  transition: ease-in 0.1s;
  &:hover {
    opacity: 0.8;
  }
`;
export default function Slider(props) {
  const { text, position, bg } = props;

  return (
    <SliderBox bg={bg} position={position}>
      <Content>
        <h4>Fassion Sale</h4>
        <p>{text}</p>
        <Button>Shop Now</Button>
      </Content>
    </SliderBox>
  );
}
