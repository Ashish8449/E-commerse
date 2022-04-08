import React from "react";
import styled from "styled-components";
const Box = styled.div`
  padding: 5px 30px;
  h5 {
    font-size: 14px;
    /* margin-bottom: 10px; */
  font-weight: bold;
    color: #878787;
    /* background-color: #fff; */
}
p{
    font-size: 10px;
}
@media (max-width: 350px){
  padding: 5px 10px;
}
  
`;
export default function Card(props) {
  const { title, discription } = props;
  return (
    <Box>
      <h5>{title}</h5>
      <p>
          {discription}
      </p>
    </Box>
  );
}
