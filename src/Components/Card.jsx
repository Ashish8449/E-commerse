import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { localStorageActions } from "../Reducers/localStorage";
import { uiActions } from "../Reducers/uiSlice";
const CardEle = styled.div`
  width: calc(25% - 30px);
   min-width: 250px;
  margin-bottom: 30px;
  margin: 10px;
  position: relative;

  transition: 2s;
  border-radius: 2px;

  overflow: hidden; /* [1.2] Hide the overflowing of child elements */
  transition: transform 0.5s ease img {
    width: 100%;
    border-radius: 2px;
    object-fit: contain;
    filter: drop-shadow(5px 5px 10px #aea7a7);
    border-radius: 4px;
  }

  &:hover img {
    transform: scale(1.1);
  }
  &:hover a{
    color:#ff4b2b;
  }
`;
const Content = styled.div`
  margin-top: 35px;
  text-align: center;
`;
const ImgBox = styled.div`
  position: relative;

  img {
    width: 100%;
  }
  img:hover {
    transform: scale(1.2);
  }
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
    transition: 0.7s;
    -webkit-transition: 0.7s;
    -moz-transition: 0.7s;
    -ms-transition: 0.7s;
    -o-transition: 0.7s;
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
    /* display: none; */
    background-color: #ff2020;
    color: white;
  }
  & .bi-arrows-angle-expand {
    transform: rotate(45deg);
  }
  & .bi-arrows-angle-expand :hover {
    transform: rotate(400deg);
  }
`;

export default function Card(props) {
  const { img, price, name, item } = props;
  const currentUser = useSelector((state) => state.local.currentUser);

  const dispatch = useDispatch();
  return (
    <CardEle>
      <Link to={`/shop/₹{item.product_id}`}>
        <ImgBox>
          <img
            src={`https://backendapi.turing.com/images/products/₹{img}`}
            alt=""
          />

          <Box>
            <i className="bi bi-arrows-angle-expand"></i>
            <i
              onClick={() => {
                return dispatch(
                  localStorageActions.addItemToFav({
                    id: 1,
                  })
                );
              }}
              className="bi bi-heart"
            ></i>
            <i
              onClick={() => {
                dispatch(
                  localStorageActions.addItemToCart(item)
                );
              }}
              className="bi bi-cart-plus"
            ></i>
          </Box>
        </ImgBox>
        <Content>
          <h6>{name}</h6>
          {/* <p>Floral Print Flared Kurta Set</p> */}
          <h6>₹ {(price * 80).toFixed(0)}</h6>
        </Content>
      </Link>
    </CardEle>
  );
}
