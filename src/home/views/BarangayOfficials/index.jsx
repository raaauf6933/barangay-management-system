import React from "react";
import AppContainer from "./../../components/container";
import { Row, Col } from "antd";
import OfficialAvatar from "../../components/OfficialAvatar";

const BarangayOfficials = () => {
  return (
    <>
      <AppContainer>
        <div className="home-section-title">
          <span className="home-section-main-title">List of Officials</span>
          <br />
          <span className="home-section-description ">
            Barangay Officials Directory
          </span>
        </div>
        <Row gutter={[16, 16]}>
          {[1, 2, 3, 4, 5].map((_e, index) => (
            <Col key={index} xs={24} sm={24} md={6} lg={6} xl={6}>
              <OfficialAvatar
                image=""
                name="Juan Dela Cruz"
                position="Punong Barangay"
              />
            </Col>
          ))}
        </Row>
      </AppContainer>
    </>
  );
};

export default BarangayOfficials;
