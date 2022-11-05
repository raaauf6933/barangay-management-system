import React from "react";
import { Carousel, Image } from "antd";
// import { images } from "./images";
import useFetch from "../../../hooks/useFetch";
import { GET_HOME_PAGE_BG } from "../../../portal/admin/content_settings/api";
import defaultBg from "./default_image.jpeg";

const CarouselComponent = () => {
  const contentStyle = {
    // height: "400px",
    // color: "#fff",
    // lineHeight: "400px",
    // textAlign: "center",
    // background: "#364d79",
    width: "100%",
    height: "600px",
    maxHeight: "600px",
  };

  const { response } = useFetch({
    url: GET_HOME_PAGE_BG,
  });

  const data = response?.data?.result ? response?.data?.result : [];

  return (
    <Carousel autoplay>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div key={index} style={contentStyle}>
            <Image
              src={item.url}
              wrapperStyle={{
                width: "100%",
                height: "600px",
                maxHeight: "600px",
              }}
            />
          </div>
        ))
      ) : (
        <div style={contentStyle}>
          <Image
            src={defaultBg}
            wrapperStyle={{
              width: "100%",
              height: "600px",
            }}
          />
        </div>
      )}
    </Carousel>
  );
};

export default CarouselComponent;
