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
export default function CardBox(props) {
  const { type } = props;
  let products = useSelector((state) => state.ui.products);
  let items = products.rows;
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoader(true);
    dispatch(getProducts(setLoader));
  }, []);
  if (products.length > 0) {
    setLoader(false);
    console.log(products);
  }
  console.log(products);
  console.log(type);
  if (type === "women") {
    console.log(products.rows);
    items = products.rows.filter((ele, indx) => {
      return indx > 20;
    });
  }

  return (
    <Box>
      {loader && (
        <Loader>
          <img src="/images/Spinner-0.8s-223px.gif" alt="" />
        </Loader>
      )}

      {items.length > 0 &&
        items.map((item, indx) => {
          return <Card data-aos="zoom-out-down" key={indx} item={item} />;
        })}
    </Box>
  );
}
