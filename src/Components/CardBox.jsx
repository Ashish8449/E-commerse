import React, { useEffect, useState } from "react";

import styled from "styled-components";
import Card from "./Card";
const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  /* align-items:; */
  padding: 40px 0;
`;
const Loader= styled.div`
  min-width: calc(100vw - 30vw);
   height:  80vh;
   display: flex;
   align-items:center;
   justify-content: center;
   img{

     width: 100px;
     height: 100px;
     text-align: center;
   }

`;
export default function CardBox() {
  const [cards, setCards] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    const getData = async () => {
      const res = await fetch(`https://backendapi.turing.com/products`);
      const data = await res.json();

 
      setLoader(false);
      setCards(data.rows);
 
    };
    getData();
  }, []);

  return (
    <Box>
      {loader && <Loader>
        <img src="/images/Spinner-0.8s-223px.gif" alt="" />
        </Loader>}
      {cards.length>0 && cards.map((item ,indx) => {
  
        return (
          <Card key={indx} img={item.thumbnail} name={item.name} price={item.price} />
        );
      })}
      {/* <Card />
      <Card /> <Card />
      <Card /> */}
    </Box>
  );
}
