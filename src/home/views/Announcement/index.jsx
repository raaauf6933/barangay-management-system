import React from "react";
import { Card, Tooltip, Button } from "antd";
import { ClockCircleFilled, ArrowLeftOutlined } from "@ant-design/icons";
import moment from "moment-timezone";
import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./../../../hooks/useFetch";
import { GET_ANNOUNCEMENT } from "./../Home/api";

const Announcement = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { response } = useFetch({
    url: GET_ANNOUNCEMENT,
    params: {
      id,
    },
  });

  const announcements = response?.data?.announcements;

  return (
    <>
      <div className="announcement-container">
        <Card
          className="announcement-card"
          extra={
            <Tooltip title="back to home page">
              <Button
                onClick={() => navigate("/")}
                shape="circle"
                icon={<ArrowLeftOutlined />}
              />
            </Tooltip>
          }
        >
          <div className="announcement-content">
            <span className="announcement-title">{announcements?.title}</span>
            <span className="announcement-description">
              <div
                dangerouslySetInnerHTML={{ __html: announcements?.content }}
              ></div>
              <div>
                {announcements?.Images.map((image) => (
                  <>
                    <img
                      style={{
                        padding: "1em",
                      }}
                      width={200}
                      key={image.url}
                      src={image.url}
                      alt="d"
                    />
                  </>
                ))}
              </div>
            </span>
          </div>

          <div className="announcement-date">
            <span>
              Last updated {moment(announcements?.createdAt).fromNow()}{" "}
              <ClockCircleFilled />
            </span>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Announcement;
