import React from "react";
import { Card, Tooltip, Button } from "antd";
import { ClockCircleFilled, ArrowLeftOutlined } from "@ant-design/icons";
import moment from "moment-timezone";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Announcement = () => {
  const navigate = useNavigate();

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
            <span className="announcement-title">
              Bayanihan in Taguig vs COVID-19 - Nov 16, 2020
            </span>
            <span className="announcement-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              et cursus erat, vitae vestibulum nisl. Donec tristique mi nec
              tincidunt venenatis. Ut sit amet tellus eleifend, ornare orci nec,
              fringilla nisi. Vivamus eu quam interdum est accumsan placerat non
              aliquet turpis. Morbi tempus lacinia augue, ut commodo leo
              pulvinar a. Morbi eget enim arcu. Nam blandit aliquam
              pellentesque. Sed commodo condimentum ante nec commodo. Nulla
              risus purus, volutpat a mattis sit amet, venenatis vel libero.
              Nulla facilisi. Aenean euismod ultrices dictum.
            </span>
          </div>

          <div className="announcement-date">
            <span>
              Last updated {moment().fromNow()} <ClockCircleFilled />
            </span>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Announcement;
