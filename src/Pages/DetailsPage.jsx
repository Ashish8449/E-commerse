import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";
import styled from "styled-components";
const Wrapper = styled.div`
  padding: 60px 40px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
export default function DetailsPage() {
  const { productId } = useParams();
  const [item, setItem] = useState({
    product_id: 5,
    name: "Marianne",
    description:
      'She symbolizes the "Triumph of the Republic" and has been depicted many different ways in the history of France, as you will see below!',
    price: "15.95",
    discounted_price: "14.95",
    image: "marianne.gif",
    image_2: "marianne-2.gif",
    thumbnail: "marianne-thumbnail.gif",
    display: 2,
  });
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
  `;
  const Buttons = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 20px 0px ;

  `;

  useEffect(() => {});
  return (
    <>
      <Wrapper>
        <Img>
          <Carousel autoPlay={true} showThumbs={false} useKeyboardArrows={true}>
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
          <h3>Chartres Cathedral</h3>
        </Img>
        <Discription>
          <h3>Chartres Cathedral</h3>
          <p>Special price</p>
          <Price>
            ₹ 10
            <span>₹ 15</span>
            <PercentOff>75 % Off</PercentOff>
          </Price>
          <Rating>
            <span>{(Math.random().toFixed(2) * 2 + 3).toPrecision(2)}</span>
            <img src="/images/star.svg" alt="" />
          </Rating>
          <RateingText>78,678 ratings and 9,515 reviews</RateingText>

          <Buttons>
            <Button>
              <i className="bi bi-cart-plus"></i>
              Add to Cart
            </Button>{" "}
            <Button>
              {" "}
              <i className="bi bi-heart"></i> Add to Fav
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
    </>
  );
}
