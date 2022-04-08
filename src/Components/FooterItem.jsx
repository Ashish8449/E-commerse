import React from "react";
import styled from "styled-components";
const Item = styled.ul`
  color: white;
  &::first-line {
    font-weight: bold;
    margin-bottom: 15px;
  }
  li {
    margin: 10px 0px;
  }
`;
export default function FooterItem(props) {
  const { data } = props;
  return (
    <Item>
      {data.map((item, indx) => (
        <li key={indx}>{item}</li>
      ))}
    </Item>
  );
}
