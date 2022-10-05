import React from "react";
import { Layout, Row, Col } from "antd";
import { EnvironmentFilled, PhoneFilled } from "@ant-design/icons";
const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer className="footer">
      <Row>
        <Col span={12} xl={12} md={24} sm={24} xs={24}>
          <div>
            <span>
              <EnvironmentFilled /> Barangay 845 Zone 92 District VI, Pandacan,
              Manila 1011 Manila, Philippines
            </span>
          </div>
          <div>
            <Row>
              <Col span={2}>
                <PhoneFilled />
              </Col>
              <Col span={11} xl={11}>
                <span>
                  (02) 0842 4212 <br /> (02) 0852 5754 <br /> (02) 0842 4212
                </span>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={12} xl={12} md={24} sm={24} xs={24}>
          <div>
            <h3 className="quick-link-title">Quick Links</h3>
          </div>
          <div className="quick-link">
            <span>Mission and Vision</span>
          </div>
          <div className="quick-link">
            <span>Barangay Officials</span>
          </div>
        </Col>
        <Col
          span={24}
          style={{
            textAlign: "center",
            marginTop: "2em",
          }}
        >
          <span>2022 © Barangay 845 | Pandacan | Sampaloc</span>
        </Col>
      </Row>
    </Footer>
  );
};

export default FooterComponent;
