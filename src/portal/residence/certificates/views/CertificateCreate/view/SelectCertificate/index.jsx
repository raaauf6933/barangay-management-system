import React from "react";
import { Card, Radio, Space, Divider, Button } from "antd";
import "../../style.css";
import { useNavigate } from "react-router-dom";
import { CreatePath_Form } from "../../../../url";

const SelectCertificate = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Card title={<h2>Step - 1 Choose Type of Certificate</h2>}>
        <Radio.Group onChange={onChange} value={value}>
          <Space direction="vertical">
            <Radio value={1}>CLEARANCE</Radio>
            <Radio value={2}>RESIDENCY</Radio>
            <Radio value={3}>BUSINESS PERMIT</Radio>
            <Radio value={4}>INDIGENCY</Radio>
          </Space>
        </Radio.Group>
        <Divider />
        <div className="action-area">
          <Button>Back</Button>
          <Button type="primary" onClick={() => navigate(CreatePath_Form)}>
            Proceed
          </Button>
        </div>
      </Card>
    </>
  );
};

export default SelectCertificate;
