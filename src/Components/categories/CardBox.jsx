import { Axios } from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";

const Box = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 50px 20px;
  overflow: hidden;
  & div{
    /* width: calc(33% - 20px); */
  }
  & div img {
    width: 100%;
  }

  @media (max-width: 506px) {
    flex-direction: column;
    /* width: calc(100% - 20px); */
  }
`;

export default function CardBox() {
  return (
    <Box>
      <Card
        img="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/xitems1.jpg.pagespeed.ic.oEs2Is3V_r.webp"
        text="Men's Fashion"
      />
      <Card
        img="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/xitems2.jpg.pagespeed.ic.rorSvQkHIK.webp"
        text="Women's Fashion"
      />
      <Card
        img="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/xitems3.jpg.pagespeed.ic.oIlAW2CB1j.webp"
        text="Baby Fashion"
      />
    </Box>
  );
}
