import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { localStorageActions } from "../Reducers/localStorage";
const CartItem = styled.div`
  display: flex;
  width: calc(50% - 20px);
  margin: 10px 10px;
  padding: 10px 0px;

  border: 1px solid #f2e1e1;
  height: auto;
  img {
    width: 100%;
  }
  @media only screen and (max-width: 430px) {
    flex-direction: column;
    /* text-align: center; */
  }
`;

const ImgBox = styled.div`
  margin: 0 10px;
  line-height: 18px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const ProductDetails = styled.div`
  position: relative;
  height: inherit;

  flex-grow: 1;
  margin-left: 30px;

  h4 {
    font-size: 20px;
  }
`;
const Button = styled.button`
  padding: 10px 15px;
  margin: 5px 0px;
`;
export default function MycartItems(props) {
  const { item } = props;

  const dispatch = useDispatch();
  const removeHandler = (e) => {
    dispatch(localStorageActions.removeHandler(item));
  };

  return (
    <CartItem>
      <ImgBox>
        <Link to={`/shop/${item.product_id}`}>
          <img
            src={`https://backendapi.turing.com/images/products/${item.thumbnail}`}
            alt=""
          />
        </Link>
      </ImgBox>
      <ProductDetails>
        <h4>{item.name}</h4>
        <p>{item.description.slice(0, 80)} ...</p>
        <h3> ₹ {(item.price * 80).toFixed(0)}</h3>
        <Button onClick={removeHandler}>Remove</Button>
      </ProductDetails>
    </CartItem>
  );
}
