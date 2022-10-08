import React from "react";
import Carousel from "./../../components/Carousel";
import AppContainer from "./../../components/container";
import Announcement from "../../components/Announcement";
import IssuanceCard from "../../components/IssuanceCard";
import "./style.css";
// import { Row, Col } from "antd";

const HomeView = () => {
  return (
    <>
      <Carousel images={[1, 2, 3, 4, 5]} />
      <AppContainer>
        <div className="home-section-title">
          <span className="home-section-main-title">Announcements</span>
          <br />
          <span className="home-section-description ">
            Discover Recent Announcements In Our Barangay
          </span>
        </div>
        {/* <Row>
          <Col md={24}> */}
        <Announcement />
        {/* </Col> */}
        {/* <Col md={24}> */}
        {/* <div className="home-section-title">
          <span className="home-section-description ">
            Learn About The Most Recent News
          </span>
        </div>
        <Announcement title="News" /> */}
        {/* </Col> */}
        {/* <Col md={24}> */}
        {/* <div className="home-section-title">
          <span className="home-section-description ">
            Discover the most recent Events
          </span>
        </div>
        <Announcement title="Events" /> */}
        {/* </Col>
        </Row> */}
        <div className="home-section-title">
          <span className="home-section-main-title">Issuance</span>
          <br />
          <span className="home-section-description ">
            Giving You The Necessary Documents Was Our First Concern
          </span>
        </div>
        <IssuanceCard
          title="Barangay Clearance"
          description="A requirement before the municipality issues any license for the business or activity."
        />
        <IssuanceCard
          title="Certificate of Indigency"
          description="Issued to less fortunate resident who desires to avail assistance such as Scholarship, Medical Services, Free Legal Aid from Public Attorneys Office (PAO) and the like."
        />
        <IssuanceCard
          title="Certificate of Residency"
          description="This document certifies that you are a good resident in the barangay and have a good moral character."
        />
        <IssuanceCard
          title="Barangay Business Clearance"
          description="A form of licence that businesses must apply for and obtain through their local Barangay Office."
        />
      </AppContainer>
    </>
  );
};

export default HomeView;
