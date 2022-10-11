import React from "react";
import { Card, Image } from "antd";
import { Row, Col } from "antd";
import logo from "./../../../assets/barangay_logo1.png";
import { useNavigate } from "react-router";
import { AnnouncementDetailsUrl } from "./../../url";
import moment from "moment";
const { Meta } = Card;

const Announcement = (props) => {
  const { title, announcements } = props;

  const navigate = useNavigate();

  return (
    <div>
      <h1>{title}</h1>
      <Row gutter={[16, 16]}>
        {announcements &&
          announcements.map((_e, index) => {
            return (
              <Col key={index} xs={24} sm={24} md={24} xl={6}>
                <Card
                  onClick={() => navigate(AnnouncementDetailsUrl(_e.id))}
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
                      <Image
                        width={150}
                        src={_e.Images[0] ? _e.Images[0].url : logo}
                        preview={false}
                      />
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
                    title={_e.title}
                    description={
                      <div
                        style={{
                          fontSize: "9px",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          height: "50px",
                          maxHeight: "50px",
                          color: "black",
                          opacity: 0.4,
                        }}
                      >
                        <div
                          dangerouslySetInnerHTML={{ __html: _e.content }}
                        ></div>
                      </div>
                    }
                  />
                  <div className="announcement-date">
                    <span className="">
                      {moment(_e.createdAt).format("LL")}
                    </span>{" "}
                  </div>
                </Card>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default Announcement;
