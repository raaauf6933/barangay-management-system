import React from "react";
import Carousel from "./../../components/Carousel";
import AppContainer from "./../../components/container";
import Announcement from "../../components/Announcement";
import { Row, Col } from "antd";

const HomeView = () => {
  return (
    <>
      <Carousel images={[1, 2, 3, 4, 5]} />
      <AppContainer>
        {/* <Row>
          <Col md={24}> */}
        <Announcement title="Announcement" />
        {/* </Col> */}
        {/* <Col md={24}> */}
        <Announcement title="News" />
        {/* </Col> */}
        {/* <Col md={24}> */}
        <Announcement title="Events" />
        {/* </Col>
        </Row> */}
      </AppContainer>
    </>
  );
};

export default HomeView;
