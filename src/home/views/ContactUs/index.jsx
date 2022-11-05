import React from "react";
import AppContainer from "../../components/container";
import { Row, Col, Avatar } from "antd";
import { PhoneFilled, MailFilled } from "@ant-design/icons";
import "./style.css";

const ContactUs = () => {
  return (
    <>
      <AppContainer>
        <div className="contact-us-container">
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className="contact-us-content">
                <span className="home-section-main-title">CONTACT US</span>
                <span className="home-section-description ">
                  Contact Us Using the Information Provided Below
                </span>
                <p className="contact-us-description">
                  You want assistance? We have your issue or question covered in
                  our support.
                </p>
                <div className="contact-details-section">
                  <Avatar
                    className="contact-us-icon"
                    shape="square"
                    size={64}
                    icon={<PhoneFilled />}
                  />
                  <div className="contact-us-details">
                    <span className="contact-us-description">
                      Contact No. :
                    </span>
                    <span className="contact-us-number">
                      <a href="tel:+639066000801">+63 906 600 0801</a> /{" "}
                      <a href="tel:87000">8 7000</a>
                    </span>
                  </div>
                </div>
                <div className="contact-details-section">
                  <Avatar
                    className="contact-us-icon"
                    shape="square"
                    size={64}
                    icon={<MailFilled />}
                  />
                  <div className="contact-us-details">
                    <span className="contact-us-description">Email :</span>
                    <span className="contact-us-number">
                      <a type="email" href="mailto:brgy_845.support@gmail.com">
                        brgy_845.support@gmail.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    width="100%"
                    height="440"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=barangay%20845%20sampaloc&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  ></iframe>
                  <a href="https://www.whatismyip-address.com"></a>
                  <br />
                  <style></style>
                  <a href="https://www.embedgooglemap.net"></a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </AppContainer>
    </>
  );
};

export default ContactUs;
