import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { localStorageActions } from "../Reducers/localStorage";
import { getProductsDetials } from "../Reducers/uiSlice";

const Wrapper = styled.div`
  padding: 60px 40px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media only screen and (max-width: 700px) {
    display: block;
  }
  
`;
const Img = styled.div`
  text-align: center;
  min-height: 300px;
  min-width: 400px;

  h3 {
    margin-top: 20px;
  }
  flex-grow: 1;

  img {
    width: 100%;
  }
`;
const Discription = styled.div`
  margin-left: 30px;
  /* margin-top: 30px;   */
  /* text-align: center; */
  h3 {
    /* margin-bottom: 5px; */
  }
  p {
    color: #ff4b2b;
    font-size: 15px;
    font-weight: 700;
    margin: 5px 0px;
  }
`;
const Price = styled.h3`
  text-align: left;
  margin: 20px 0px;
  span {
    margin-left: 20px;
    font-size: 16px;
    text-decoration: line-through;
    color: #878787;
  }
`;
const PercentOff = styled.span`
  margin-left: 20px;
  color: #ff4b2b !important;
  text-decoration: none !important;
  font-weight: 700;
`;
const Rating = styled.div`
  background-color: #ff4b2b;
  width: 90px;
  padding: 5px 10px;
  border-radius: 15px;
  color: #fff;
  font-weight: 600;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  justify-content: space-between;
  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
    margin-right: 10px;
  }
  span {
    font-size: 18px;
  }
`;
const RateingText = styled.span`
  color: grey;
  font-size: 15px;
`;
const DiscriptionText = styled.div`
  margin: 10px 0px;
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

const Button = styled.button`
  margin-right: 20px !important;
  margin-top: 10px;
  font-size: 14px !important;
  padding: 10px 20px;
  font-weight: 500;
  letter-spacing: 1px;
  word-spacing: 1px;
  display: flex;
  align-items: center;

  i {
    font-size: 16px;
    margin-right: 10px;
  }
  i.bi-heart-fill {
    color: ${(prop) => (prop.white ? "white !important" : "#ff4b2b")};
  }
`;
const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 20px 0px;
`;

let discount = Math.random() * 10 + 20;
discount = discount.toFixed(0);

const RatingRate = (Math.random().toFixed(2) * 2 + 3).toPrecision(2);
const Rateby = (Math.random() * 500000).toFixed(0);
export default function DetailsPage() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const products = useSelector((state) => state.ui.products);
  const wishList = useSelector((state) => state.local.wishList);
  const cartItems = useSelector((state) => state.local.cartItems);
  const currentItem = products.rows[productId - 1];

  const [loader, setLoader] = useState(false);
  const [item, setItem] = useState("");

  useEffect(() => {
    dispatch(getProductsDetials(setLoader, productId, setItem));
  }, [productId]);

  const fillHeart =
    wishList.filter((ele) => item.product_id === ele.product_id).length === 1;
  const isInCart =
    cartItems.filter((ele) => item.product_id === ele.product_id).length === 1;
  // price section

  let realPrice = (item.price * 80).toFixed(0);
  let newPrice = realPrice - ((discount * realPrice) / 100).toFixed(0);

  return (
    <>
      {loader && (
        <Loader>
          <img src="/images/Spinner-0.8s-223px.gif" alt="" />
        </Loader>
      )}
      {item !== "" && !loader && (
        <Wrapper>
          <Img>
            <Carousel
              autoPlay={true}
              showThumbs={false}
              useKeyboardArrows={true}
            >
              <img
                src={`https://backendapi.turing.com/images/products/${item.image}`}
                alt=""
              />
              <img
                src={`https://backendapi.turing.com/images/products/${item.image_2}`}
                alt=""
              />
              <img
                src={`https://backendapi.turing.com/images/products/${item.thumbnail}`}
                alt=""
              />
            </Carousel>
            <h3>{item.name}</h3>
          </Img>
          <Discription>
            <h3>{item.name}</h3>
            <p>Special Price</p>
            <Price>
              ₹ {newPrice}
              <span>₹ {realPrice}</span>
              <PercentOff>{discount} % Off</PercentOff>
            </Price>
            <Rating>
              <span>{RatingRate}</span>
              <img src="/images/star.svg" alt="" />
            </Rating>
            <RateingText>{Rateby} ratings and 9,515 reviews</RateingText>

            <Buttons>
              <Button
                onClick={() =>
                  dispatch(localStorageActions.addItemToCart(currentItem))
                }
              >
                <i className="bi bi-cart-plus"></i>
                {isInCart ? "Remove  " : "Add "}
              </Button>{" "}
              <Button
                onClick={() =>
                  dispatch(localStorageActions.addItemToFav(currentItem))
                }
              >
                {" "}
                <i className="bi bi-heart"></i>
                {fillHeart ? "Remove " : "Add  "}
              </Button>
            </Buttons>
            <DiscriptionText>
              {item.description}{" "}
              {item.description.length < 300
                ? "    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque debitis ullam voluptatum cumque pariatur corrupti saepe, incidunt modi, iste provident vero adipisci quibusdam, commodi in a est. Nesciunt, tempore illo.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione reiciendis suscipit eveniet dignissimos saepe incidunt, a facilis ipsum veritatis nesciunt rerum cupiditate? Corporis veritatis sit autem rerum non perferendis pariatur?"
                : " "}
            </DiscriptionText>
          </Discription>
        </Wrapper>
      )}
    </>
  );
}
