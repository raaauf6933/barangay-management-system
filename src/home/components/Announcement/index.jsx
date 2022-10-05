import React from "react";
import { Card, Image } from "antd";
import { Row, Col } from "antd";
import logo from "./../../../assets/barangay_logo1.png";
const { Meta } = Card;

const Announcement = (props) => {
  const { title } = props;

  return (
    <div>
      <h1>{title}</h1>
      <Row gutter={[16, 16]}>
        {new Array(Math.floor(Math.random() * 6) + 1)
          .fill(null)
          .map((_e, index) => {
            return (
              <Col key={index} xs={24} sm={24} md={24} xl={6}>
                <Card
                  hoverable
                  style={{
                    width: 300,
                  }}
                  cover={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "2em",
                      }}
                    >
                      <Image width={150} src={logo} preview={false} />
                    </div>
                  }
                  actions={
                    [
                      //   <SettingOutlined key="setting" />,
                      //   <EditOutlined key="edit" />,
                      //   <EllipsisOutlined key="ellipsis" />,
                    ]
                  }
                >
                  <Meta
                    title="Bayanihan in Taguig vs COVID-19
                  - Nov 16, 2020"
                    description="Lorem ipsum dolor sit amet test test...."
                  />
                </Card>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default Announcement;
