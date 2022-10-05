import React from "react";
import { Card } from "antd";
import {
  // Typography,
  Divider,
  // Row, Col
} from "antd";
import Form from "../components/Form";
import logo from "./../../../assets/barangay_logo1.png";
import "./style.css";

// const { Title, Text } = Typography;

const Login = () => {
  return (
    <>
      <div className="login">
        <div className="login-container">
          <Card style={{ width: 600 }} size="default">
            <div>
              <div
                className="brgy-details"
                // style={{
                //   display: "flex",
                //   justifyContent: "center",
                //   alignItems: "center",
                // }}
              >
                <div
                  style={{
                    margin: "1em",
                  }}
                >
                  <img
                    src={logo}
                    alt=""
                    style={{
                      width: "100px",
                    }}
                  />
                </div>
                <div
                  style={{
                    margin: "1em",
                  }}
                >
                  <span className="brgy-name">Brgy 845 Pandacan</span>
                  <Divider
                    style={{
                      margin: "0px",
                    }}
                  />
                  <div
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <span className="brgy-system">
                      Barangay Information <br /> Management System
                    </span>
                  </div>
                </div>
              </div>

              <Form />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Login;
