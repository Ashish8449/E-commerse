import React from "react";
import Slider from "./Slider";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export default function () {
  const data = [
    {
        id:1,
      bg: `https://preview.colorlib.com/theme/capitalshop/assets/img/hero/xh1_hero1.jpg.pagespeed.ic.i78C8XcvnM.webp`,
      text: `Fashion quotes for men can transform the way you view yourself every day. We as men are able to choose from an evolving marketplace of ideas .`,
      position: "flex-start",
    },
    {
        id:2,
      bg: `https://preview.colorlib.com/theme/capitalshop/assets/img/hero/xh1_hero2.jpg.pagespeed.ic.nn0ycp9QdZ.webp`,
      text: `Fashion quotes for men can transform the way you view yourself every day. We as men are able to choose from an evolving marketplace of ideas `,
      position: "flex-end",
    },
  ];
  return (
<>

    <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false}>

      {data.map((item) => (
        <Slider key={item.id} bg={item.bg} text={item.text} position={item.position} />
      ))}

    </Carousel>
    </>
  );
}
