import React from "react";
import AppContainer from "./../../components/container";
import { Row, Col, Space, Spin } from "antd";
import OfficialAvatar from "../../components/OfficialAvatar";
import useFetch from "./../../../hooks/useFetch";
import { GET_OFFICIALS } from "./api";

const BarangayOfficials = () => {
  const { response, loading } = useFetch({
    url: GET_OFFICIALS,
    params: {
      status: true,
    },
  });

  const officials = response?.data?.officials ? response?.data?.officials : [];

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
        {loading || officials?.lenght === 0 ? (
          <>
            <div
              style={{
                textAlign: "center",
                padding: "5em",
              }}
            >
              <Space size="large">
                <Spin size="large" />
              </Space>
            </div>
          </>
        ) : (
          <Row gutter={[16, 16]}>
            {officials?.map((e, index) => {
              return (
                <Col key={index} xs={24} sm={24} md={6} lg={6} xl={6}>
                  <OfficialAvatar
                    image={e.photo_url}
                    name={`${e?.first_name} ${e?.last_name}`}
                    position={e?.Position?.name}
                  />
                </Col>
              );
            })}
          </Row>
        )}
      </AppContainer>
    </>
  );
};

export default BarangayOfficials;
