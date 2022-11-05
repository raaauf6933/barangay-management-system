import React from "react";
import { Card, Row, Col } from "antd";
import CertificateIcon from "./../../../assets/certification.svg";
// import FileIcon from "./../../../assets/symlink_file.svg";
import { ReactSVG } from "react-svg";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2>Quick Links</h2>
      <Row gutter={[16, 16]}>
        {/* <Col xs={24} sm={24} md={6}>
          <Card>
            <div className="quick-link-card">
              <ReactSVG useRequestCache={false} wrapper="span" src={FileIcon} />
              <div className="quick-link-card-details">
                <span className="quick-link-card-title">File Report</span>
                <span className="quick-link-card-sub-title">
                  File a Barangay Report
                </span>
              </div>
            </div>
          </Card>
        </Col> */}
        <Col xs={24} sm={24} md={6}>
          <Card onClick={() => navigate("/portal/residence/issuance/create")}>
            <div className="quick-link-card">
              <ReactSVG
                useRequestCache={false}
                wrapper="span"
                src={CertificateIcon}
              />
              <div className="quick-link-card-details">
                <span className="quick-link-card-title">
                  Request Barangay Certificates
                </span>
                <span className="quick-link-card-sub-title">
                  Request Barangay Clearance, Barangay Permit etc.
                </span>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Home;
