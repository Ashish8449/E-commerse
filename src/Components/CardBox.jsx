import React, { useEffect, useState } from "react";

import styled from "styled-components";
import Card from "./Card";
const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items:;
  padding: 40px 0;
`;
export default function CardBox() {
  const [cards, setCards] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://backendapi.turing.com/products/inCategory/1`
      );
      const data = await res.json();

      console.log(data);
      setLoader(false);

      if (data) setCards(data.row);
    };
    getData();
  }, []);
  return (
    <Box>
      {/* {cards && cards.map((item) => <Card />)} */}
      <Card />
 
      <Card /> <Card />
      <Card />
     
    </Box>
  );
}
