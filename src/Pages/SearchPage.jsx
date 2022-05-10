import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Card";
import styled from "styled-components";
const Loader = styled.div`
  min-width: calc(100vw - 30vw);
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100px;
    height: 100px;
    text-align: center;
  }
`;
const Box = styled.div`
  display: flex;
  margin: auto;
  width: auto;
  padding: 30px 30px;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
export default function SearchPage() {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);

  const getData = async (val) => {
    const item = await fetch(
      `https://backendapi.turing.com/products/search?query_string=${val} -H "accept: application/json`
    );
    const data = await item.json();
    setItems(data.rows);
    console.log("data is seted ");
    setLoader(false);
  };


  const parms = useParams();

  const { item } = parms;

  useEffect(() => {
    setLoader(true);
    
    getData(item);
  }, [item]);
  return (
    <div>
      <Box>
        {loader && (
          <Loader>
            <img src="/images/Spinner-0.8s-223px.gif" alt="" />
          </Loader>
        )}
        {items.length >= 0 &&
          items.map((item, key) => <Card key={key} item={item} />)}
      </Box>
    </div>
  );
}
