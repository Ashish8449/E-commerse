import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import MycartItems from "../Components/MycartItems";
const Empty = styled.div`
  text-align: center;
  margin: 30px 20px;
  font-size: 25px;
`;
const CartBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 10px;
`;
const Total = styled.h3`
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 18px;
  }
`;
export default function MyCart() {
  const items = useSelector((state) => state.local.cartItems);
 
  let TotalPrice = 0;
  items.forEach((item) => {
    TotalPrice = TotalPrice + +(item.price * 80).toFixed(0);
  });

  return (
    <>
      {items.length === 0 && <Empty>Your Shopping Bag is Empty!! 🙁</Empty>}
      {items.length !== 0 && (
        <CartBox>
          {items.map((item, indx) => (
            <MycartItems item={item} />
          ))}
        </CartBox>
      )}
      {items.length !== 0 && (
        <Total>
          <div>Total Price</div>
          <div>
            ₹ {TotalPrice} <span>only</span>
          </div>
        </Total>
      )}
    </>
  );
}
