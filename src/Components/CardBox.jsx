import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { getProducts } from "../Reducers/uiSlice";
import Card from "./Card";
const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  /* align-items:; */
  padding: 40px 0;
`;
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
export default function CardBox() {
  const products = useSelector((state) => state.ui.products.rows);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoader(true);
    dispatch(getProducts(setLoader));
  
  }, []);

  return (
    <Box>
      {(loader ) && (
        <Loader>
          <img src="/images/Spinner-0.8s-223px.gif" alt="" />
        </Loader>
      )}
      {products.length > 0 &&
        products.map((item, indx) => {
          return (
            <Card
              key={indx}
              img={item.thumbnail}
              name={item.name}
              price={item.price}
              item={item}
            />
          );
        })}
      {/* <Card />
      <Card /> <Card />
      <Card /> */}
    </Box>
  );
}
