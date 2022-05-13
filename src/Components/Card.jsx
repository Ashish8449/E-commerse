import { push, ref, set } from "firebase/database";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import styled from "styled-components";
import { db } from "../Firebase/firebase";
import { localStorageActions } from "../Reducers/localStorage";

const CardEle = styled.div`
  width: calc(25% - 30px);

  margin-bottom: 30px;
  margin: 10px;
  position: relative;
  min-width: 210px;
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
  &:hover a {
    color: #ff4b2b;
  }
  @media only screen and (max-width: 600px) {
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
  bottom: 0px;
  left: 10px;
  /* background: red; */
  padding: 10px 0px;
  /* left: 30%; */
  width: calc(100% - 20px);

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
  const wishList = useSelector((state) => state.local.wishList);
  const data = useSelector((state) => state.local);
  const navigate = useNavigate();
  const { item } = props;
  const { showFav, setFav } = props;
  const { thumbnail, price, name } = item;
  const fillHeart =
    wishList.filter((ele) => item.product_id === ele.product_id).length === 1;

  let uid = "";

  if (data.user) {
    set(ref(db, "users/" + data.user), {
      data,
    });
  }
  const dispatch = useDispatch();
  return (
    <CardEle data-aos="zoom-out-down">
      <ImgBox>
        <Link
          to={`/shop/${item.product_id}`}
          onClick={() => {
            if (showFav) {
              setFav(!showFav);
            }
          }}
        >
          <img
            src={`https://backendapi.turing.com/images/products/${thumbnail}`}
            alt=""
          />
        </Link>
        <Box>
          <i
            className="bi bi-arrows-angle-expand"
            onClick={() => {
              navigate(`/shop/${item.product_id}`);
            }}
          ></i>

          <i
            onClick={() => {
              return dispatch(localStorageActions.addItemToFav(item));
            }}
            className={`bi  ${fillHeart ? "bi-heart-fill" : "bi-heart"}`}
          ></i>
          <i
            onClick={() => {
              dispatch(localStorageActions.addItemToCart(item));
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
    </CardEle>
  );
}
