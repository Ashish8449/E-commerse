import React, { useEffect, useState } from "react";
import About from "../Components/AboutSection.jsx/About";
import CarouselComponet from "../Components/CarouselComponet";
import CardBox from "../Components/categories/CardBox";
import HomeItems from "../Components/Items/HomeItems";
import styled from "styled-components";
import homeItemsList from "../data";
export const Loader = styled.div`
  min-width: calc(100vw - 30vw);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100px;
    height: 100px;
    text-align: center;
  }
`;
const Wrapper = styled.div`
  @media (max-width: 766px) {
    padding: 10px;
    border-radius: 8px;
  }
`;
export default function Home() {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <>
      {loader && (
        <Loader>
          <img src="/images/Spinner-0.8s-223px.gif" alt="" />
        </Loader>
      )}
      {!loader && (
        <>
          <CarouselComponet />
          <Wrapper>
            <CardBox />
          </Wrapper>
          {homeItemsList.map((item, key) => (
            <HomeItems key={key} title={item.title} imgs={item.imgs} />
          ))}

          <About />
        </>
      )}
    </>
  );
}
