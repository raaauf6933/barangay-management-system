import React from "react";
import { Carousel, Image } from "antd";
import { images } from "./images";

const CarouselComponent = () => {
  const contentStyle = {
    // height: "400px",
    // color: "#fff",
    // lineHeight: "400px",
    // textAlign: "center",
    // background: "#364d79",
    width: "100%",
  };

  return (
    <Carousel autoplay>
      {images.map((item) => (
        <div style={contentStyle}>
          <Image src={item.src} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
