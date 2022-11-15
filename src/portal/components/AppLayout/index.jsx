import "./style.css";
import React from "react";
import { Layout, Menu, Button, Grid } from "antd";
import SettingButton from "./components/SettingButton";
import MenuList from "../MenuList";
import { createMenuStructure, SettingStructure } from "./menuStructure";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";
import DrawerComponent from "./Drawer";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const { useBreakpoint } = Grid;
const { Header, Content, Sider } = Layout;

const AppLayout = ({ children }) => {
  const navigate = useNavigate();
  const menuStructure = createMenuStructure();
  const settingMenuStructure = SettingStructure();
  const [openDrawer, setOpenDrawer] = useState(false);

  const screens = useBreakpoint();

  const { response } = useFetch({
    url: "content_settings/get_color",
  });

  console.log(response);

  return (
    <Layout>
      <Header
        className="header"
        style={{
          background: response?.data?.result?.value
            ? response?.data?.result?.value
            : "#001529",
        }}
      >
        <div className="nav-header">
          <div
            style={{
              display: screens.xs ? "inline-block" : "none",
            }}
          >
            <Button
              type="ghost"
              shape="default"
              icon={<MenuUnfoldOutlined />}
              style={{
                color: "white",

                display: screens.xs ? "inline-block" : "none",
              }}
              onClick={() => setOpenDrawer(true)}
            />
          </div>
          <div className="nav-name">
            <span>Barangay Management System</span>
          </div>
          <div>
            <SettingButton />
          </div>
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}></Menu>
      </Header>
      <Layout>
        {screens.xs ? null : (
          <Sider width={250} className="site-layout-background">
            <MenuList
              menuStructure={menuStructure}
              settingMenuStructure={settingMenuStructure}
            />
          </Sider>
        )}
        <DrawerComponent
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
          menuStructure={menuStructure}
          settingMenuStructure={settingMenuStructure}
          navigate={navigate}
        />
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          {/* <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
