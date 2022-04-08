import React from "react";
import styled from "styled-components";
import FooterItem from "./FooterItem";
const FooterBox = styled.div`
  background-color: #232f3e;
  display: flex;
  justify-content: space-around;
  padding: 30px 10px;
  @media (max-width: 766px) {
   flex-direction: column;
   text-align: center;
   ul{
     margin-top: 20px;
   }
  


  }
`;
const footerData = [
  [
    "Get to Know Us",
    "Careers",
    "Blog",
    "About Ashion",
    "Investor Relations",
    " Devices",
  ],
  [
    "Get to Know Us",
    "Careers",
    "Blog",
    "About Ashion",
    "Investor Relations",
    " Devices",
  ],
  [
    "Get to Know Us",
    "Careers",
    "Blog",
    "About Ashion",
    "Investor Relations",
    " Devices",
  ],
  [
    "Get to Know Us",
    "Careers",
    "Blog",
    "About Ashion",
    "Investor Relations",
    " Devices",
  ],
];

export default function Footer(props) {
  return (
    <FooterBox>
      {footerData.map((item, key) => (
        <FooterItem data={item} key={key} />
      ))}
    </FooterBox>
  );
}
