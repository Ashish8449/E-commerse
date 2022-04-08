import React from "react";
import styled from "styled-components";
const CardEle = styled.div`
  width: calc(25% - 30px);
  /* margin: 10px; */
  margin-bottom: 30px;
  margin: 10px;
  position: relative;
  transition: 0.5s all ease-in-out;
  img {
    width: 100%;
  
    object-fit: contain;
    filter: drop-shadow(5px 5px 10px #aea7a7);
    border-radius:4px;
  }
  & img:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
const Content = styled.div`
margin-top: 20px;
text-align: center;

`;
const ImgBox = styled.div`
position: relative;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 20px;
  /* left: 30%; */
  width: calc(100% - 20px);
  /* background-color: white; */
  i {
    font-size: 20px;
    margin: 0 10px;
    color: #111;
    opacity: 0.8;
    
    background: white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    padding-top: 6px;
    transform: translate(-50% 50%);
    text-align: center;

  }
  
  i:hover {
  
    cursor: pointer;
    transform: rotate(45);
    -webkit-transition: all , 0.3s;
    -o-transition: all , 0.3s;
    transition: all , 0.3s;
    /* display: none; */
    background-color: #ff2020;
    color: white;
  }
`;

export default function Card() {
  return (
    <CardEle>
      <ImgBox>
        <img
          src="/images/gulmohar_jaipur_teal_floral_print_flared_kurta_set.webp"
          alt=""
        />

        <Box>
          <i className="bi bi-arrows-angle-expand"></i>
          <i className="bi bi-heart"></i>
          <i className="bi bi-cart-plus"></i>
        </Box>
      </ImgBox>
      <Content>

        <h6>
        GULMOHAR JAIPUR
        </h6>
        <p>
        Floral Print Flared Kurta Set
        </p>
        <h6>
          $12342
        </h6>
        
      </Content>
    </CardEle>
  );
}
