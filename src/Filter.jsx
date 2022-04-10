import React from "react";
import styled from "styled-components";
const Box = styled.div`
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
  console.log(data);
  const items = data.map((item, key) => (
    <li key={key}>
      <label for={item}>
        {" "}
        <input
          type="checkbox"
          id={item + key}
          name={item}
          value={item + key}
        />{" "}
        {item}
      </label>
    </li>
  ));
  return (
    <Box>
      <h6>{heading}</h6>

      <ul>{items}</ul>
    </Box>
  );
}
