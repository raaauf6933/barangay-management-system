import React from "react";
import { Layout } from "antd";
import Header from "./Header";
import Footer from "./Footer";
import "./style.css";
import useFetch from "../../../hooks/useFetch";
const { Content } = Layout;

const AppLayout = ({ children }) => {
  const { response } = useFetch({
    url: "content_settings/get_color",
  });

  console.log(response);

  return (
    <>
      <Layout>
        <Header
          style={{
            background: response?.data?.result?.value
              ? response?.data?.result?.value
              : "#001529",
          }}
        />
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
