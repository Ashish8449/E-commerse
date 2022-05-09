import React, { useState } from "react";
import styled from "styled-components";
import CardBox from "../Components/CardBox";
import Filter from "../Filter";
import { FilterData } from "../data";
const Box = styled.div`
  display: flex;
  background: #fff;
`;
const Left = styled.div`
  padding-top: 30px;
  padding-left: 30px;
  width: calc(25% - 10px);
  /* background: red; */

  h3 {
    font-size: 20px;
    min-width: 400px;
  }
  ul {
    margin: 0;
    padding: 0;
  }
`;
const Right = styled.div`
  padding-left: 10px;
  display: flex;
  flex-wrap: wrap;
  /* @media (max-width: 500px) {
    width: calc(33% - 10px);
  } */
`;
const Input = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h6 {
    flex-grow: 1;
    margin-right: 20%;
  }

  i {
    font-size: 20px;
  }
  button {
    padding: 5px;
  }
`;
export default function ShopingPage(props) {
  const [search, setSearch] = useState(null);
  const { type } = props;
  const searchClickHandler = function (e) {
    e.preventDefault();
    setSearch(!search);
  };
  return (
    <>
      <Box>
        <Left>
          <h3>Filters</h3>
          {FilterData.map((item, indx) => (
            <Filter key={indx} heading={item.heading} data={item.types} />
          ))}
        </Left>
        <Right>
          <CardBox type={type} />
        </Right>
      </Box>
    </>
  );
}
