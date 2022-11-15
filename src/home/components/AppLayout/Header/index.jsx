import React, { useState } from "react";
import { Layout, Button, Grid } from "antd";
import { createMenuStructure } from "./../menuStructure";
import Menu from "./components/Menu";
import Drawer from "./components/Drawer";
import { useNavigate } from "react-router-dom";
// import logo from "./../../../../assets/barangay_logo.png";
import logo from "./../../../../assets/logo_1_big-modified.png";
import { MenuFoldOutlined } from "@ant-design/icons";
import useFetch from "../../../../hooks/useFetch";
const { useBreakpoint } = Grid;
const { Header } = Layout;

const AppHeader = () => {
  const navigate = useNavigate();
  const menuStructure = createMenuStructure();
  const [openDrawer, setOpenDrawer] = useState(false);

  const screens = useBreakpoint();
  const { response } = useFetch({
    url: "content_settings/get_color",
  });
  console.log(screens);
  return (
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        background: response?.data?.result?.value
          ? response?.data?.result?.value
          : "#001529",
      }}
    >
      <div
        style={{
          display: "flex",
          background: response?.data?.result?.value
            ? response?.data?.result?.value
            : "#001529",
        }}
      >
        <div
          style={{
            whiteSpace: "nowrap",
            color: "white",
            width: "50%",
            background: response?.data?.result?.value
              ? response?.data?.result?.value
              : "#001529",
          }}
        >
          <img src={logo} alt="logo" className="logo" loading="lazy" />
          <span> Official Website of Barangay 845</span>
          <Button
            type="ghost"
            shape="default"
            icon={<MenuFoldOutlined />}
            style={{
              color: "white",
              marginLeft: "2em",
              display: screens.xs ? "inline-block" : "none",
            }}
            onClick={() => setOpenDrawer(true)}
          />
        </div>
        {!screens.xs ? (
          <Menu
            menuStructure={menuStructure}
            navigate={navigate}
            color={{
              background: response?.data?.result?.value
                ? response?.data?.result?.value
                : "#001529",
            }}
          />
        ) : null}
        <Drawer
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
          menuStructure={menuStructure}
          navigate={navigate}
        />
      </div>
    </Header>
  );
};

export default AppHeader;
