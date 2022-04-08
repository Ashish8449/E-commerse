import React from "react";

import styled from "styled-components";
import Card from "./Card";
const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content :space-evenly;
  align-items: center;
  padding: 40px 0 ;
`;
export default function CardBox() {
  return (
    <Box>
      <Card />
      <Card />
      <Card />
      <Card /> <Card />
      <Card />
      <Card />
      <Card /> <Card />
      <Card />
      <Card />
      <Card /> <Card />
      <Card />
      <Card />
      <Card />
    </Box>
  );
}
