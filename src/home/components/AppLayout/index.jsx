import React from "react";
import { Layout } from "antd";
import Header from "./Header";
import Footer from "./Footer";
import "./style.css";
const { Content } = Layout;

const AppLayout = ({ children }) => {
  return (
    <>
      <Layout>
        <Header />
        <Content
          style={{
            marginTop: "3em",
          }}
        >
          {children}
        </Content>
        <Footer></Footer>
      </Layout>
    </>
  );
};

export default AppLayout;
