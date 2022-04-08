import React, { useState } from "react";
import styled from "styled-components";
import CardBox from "../Components/CardBox";

const Box = styled.div`
  display: flex;
  background: #fff;
`;
const Left = styled.div`
  padding-top: 30px;
  padding-left: 30px;
  /* width: calc(25% - 10px); */
  background: red;

  h3 {
    font-size: 20px;
  }
  ul{
    margin: 0 ;
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
export default function ShopingPage() {
  const [search, setSearch] = useState(null);
  const searchClickHandler = function (e) {
    e.preventDefault();
    setSearch(!search);
    console.log("dj");
  };
  return (
    <>
      <Box>
        <Left>
          <h3>Filters</h3>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, doloremque repudiandae. Quo, ab facilis atque esse obcaecati harum inventore sunt? Cupiditate maxime, exercitationem cumque minima earum eaque quam eveniet quaerat.
          {/* <Input>
          
            {!search && <h6>
          CATEGORIES
          </h6>}
            {search && <input type="text" />}

            <button onClick={searchClickHandler}>
              {!search && <i className="bi bi-search"></i>}
              {search && <i className="bi bi-x"></i>}
            </button>
          </Input> */}
          <ul>
            <li>skdjfkd</li> <li>skdjfkd</li> <li>skdjfkd</li> <li>skdjfkd</li>{" "}
            <li>skdjfkd</li> <li>skdjfkd</li>
          </ul>
        </Left>
        <Right>
          <CardBox />
        </Right>
      </Box>
    </>
  );
}
