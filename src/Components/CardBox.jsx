import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import styled from "styled-components";
import { getProducts } from "../Reducers/uiSlice";
import Card from "./Card";
const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  /* align-items:; */
  padding: 40px 0;
  transition: 0.7s;
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
  const products = useSelector((state) => state.ui.products);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const parms = useSearchParams();
  console.log(parms);
  useEffect(() => {
    setLoader(true);
    dispatch(getProducts(setLoader));
  }, []);

  return (
    <Box>
      {loader && (
        <Loader>
          <img src="/images/Spinner-0.8s-223px.gif" alt="" />
        </Loader>
      )}

      {products.rows.length > 0 &&
        products.rows.map((item, indx) => {
          return <Card key={indx} item={item} />;
        })}

      {/* <Card />
      <Card /> <Card />
      <Card /> */}
    </Box>
  );
}
