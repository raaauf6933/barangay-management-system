import React from "react";
import DashboardCard from "../../components/DashboardCard";
import { Row, Col, Statistic, Card } from "antd";
import { createDashboardCard } from "./utils";
import "./style.css";
import ActivityLogCard from "./components/ActivityLogCard";
import RecentAnnouncementCard from "./components/RecentAnnouncementCard";
import useFetch from "./../../../hooks/useFetch";

const Dashboard = () => {
  const { response, loading } = useFetch({
    url: "dashboard/get_admin_dashboard",
  });

  const dashboardCard = createDashboardCard(response?.data);

  return (
    <>
      <div>
        <Card>
          <Row gutter={[16, 16]}>
            {dashboardCard.map((e) => (
              <>
                {" "}
                <Col key={e.key} xs={24} sm={24} md={6} lg={6} xl={6}>
                  {/* <DashboardCard label={e.label} value={e.value} icon={e.icon} /> */}
                  <Statistic
                    title={e.label}
                    value={e.value}
                    loading={loading}
                  />
                </Col>
              </>
            ))}
          </Row>
        </Card>

        {/* <div className="dashboard-list-section">
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <RecentAnnouncementCard />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <ActivityLogCard />
            </Col>
          </Row>
        </div>*/}
      </div>
    </>
  );
};

export default Dashboard;
