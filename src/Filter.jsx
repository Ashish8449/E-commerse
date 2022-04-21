import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { uiActions } from "./Reducers/uiSlice";
const Box = styled.div`
  margin-bottom: 30px;
  h6 {
    font-weight: 600;
    margin-top: 20px;
    font-size: 20px;
  }
  input {
    /* display: block; */
    margin: 10px 0;
    font-size: 20px;
    width: 15px;
    height: 15px;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    input {
      margin-right: 10px;
    }
    font-size: 16px;
    font-weight: 600;
    align-content: center;
  }
`;

export default function Filter(props) {
  const { heading, data } = props;
  const dispatch = useDispatch();

  const filterHandler = (e) => {
    const val = e.target.value;

    const newFilter = data.map((item, key) => {
      return (
        <li key={key}>
          <input
            type="checkbox"
            name="price"
            checked={key == val ? true : false}
            value={key}
            onClick={filterHandler}
          />{" "}
          {item}
        </li>
      );
    });

    setItem(newFilter);
    dispatch(uiActions.filterProducts(val));
  };
  const [items, setItem] = useState(
    data.map((item, key) => (
      <li key={key}>
        <input
          type="checkbox"
          name="price"
          value={key}
          onClick={filterHandler}
        />{" "}
        {item}
      </li>
    ))
  );

  return (
    <Box>
      <h6>{heading}</h6>

      <ul>{items}</ul>
    </Box>
  );
}
