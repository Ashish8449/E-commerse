import React from 'react'
import About from '../Components/AboutSection.jsx/About'
import CarouselComponet from '../Components/CarouselComponet'
import CardBox from '../Components/categories/CardBox'
import HomeItems from "../Components/Items/HomeItems";
import homeItemsList from "../data"
export default function Home() {
  return (
    <>
    
    <CarouselComponet />
      <CardBox />
      {homeItemsList.map((item, key) => (
        <HomeItems key={key} title={item.title} imgs={item.imgs} />
      ))}

      <About/>

    
    </>
  )
}
