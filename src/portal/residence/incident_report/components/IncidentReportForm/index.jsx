import { Button, DatePicker, Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const IncidentReportForm = (props) => {
  const { loading } = props;
  const navigate = useNavigate();
  return (
    <>
      <Form.Item
        placeholder="Input In-charge"
        label={<span className="form-label">Subject</span>}
        name="subject"
        labelCol={{ span: 24 }}
        rules={[{ required: true, message: "This field is required" }]}
      >
        <Input size="large" />
      </Form.Item>
      <Form.Item
        placeholder="Input In-charge"
        label={<span className="form-label">Description</span>}
        name="description"
        labelCol={{ span: 24 }}
        rules={[{ required: true, message: "This field is required" }]}
      >
        <Input.TextArea size="large" rows={6} />
      </Form.Item>
      <Form.Item
        placeholder="Input In-charge"
        label={<span className="form-label">Date & Time of Incident</span>}
        name="incident_date_time"
        labelCol={{ span: 24 }}
        rules={[{ required: true, message: "This field is required" }]}
      >
        <DatePicker
          showTime
          size="large"
          use12Hours
          style={{
            width: "100%",
          }}
          showSecond={false}
          //   format={"YYYY/MM/DD hh:mm"}
        />
      </Form.Item>
      <Form.Item
        style={{
          textAlign: "center",
        }}
      >
        <Button
          type="primary"
          style={{
            marginRight: "1em",
          }}
          htmlType="submit"
          // onClick={submit}
          loading={loading}
          disabled={loading}
        >
          <strong>Submit</strong>
        </Button>
        <Button
          type="default"
          onClick={() => navigate("/portal/residence/incident_report")}
        >
          <strong>Cancel</strong>
        </Button>
      </Form.Item>
    </>
  );
};

export default IncidentReportForm;
