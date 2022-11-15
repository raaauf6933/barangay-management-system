import { Button, Form, Input, Select, Tag } from "antd";
import React from "react";
import SingleSelect from "../../../../components/SingleSelect";
import { BlotterListPath } from "../../url";

const { Option } = Select;
const BlotterForm = (props) => {
  const {
    refetchResidents,
    initialData,
    loading,
    navigate,
    officials,
    incharge_value,
  } = props;

  const getResidents = (name) => {
    return refetchResidents({
      params: {
        name,
      },
    }).then((body) =>
      body.data?.residents.map((user) => ({
        label: `${user.first_name} ${user.middle_name} ${user.last_name}`,
        value: user.id,
      }))
    );
  };

  const inChargeChoices = officials
    ? officials?.map((e) => ({
        label: `${e.first_name} ${e.last_name} - ${e.Position.name}`,
        value: e.id,
      }))
    : [];

  inChargeChoices?.push({
    label: `Other`,
    value: "OTHER",
  });

  return (
    <>
      <Form.Item
        label={<span className="form-label">Complainant (Full Name)</span>}
        name="complainant"
        labelCol={{ span: 24 }}
        rules={[{ required: true, message: "This field is required" }]}
      >
        <Input
          size="large"
          placeholder="Enter Complainant Name (ex. Juan Dela Cruz)"
        />
      </Form.Item>
      <Form.Item
        label={<span className="form-label">Complainant Statement</span>}
        name="statement"
        labelCol={{ span: 24 }}
        rules={[{ required: true, message: "This field is required" }]}
      >
        <Input.TextArea
          size="large"
          rows={4}
          placeholder="Enter Complainant Statement"
        />
      </Form.Item>
      <Form.Item
        label={<span className="form-label">Respondent (Full Name)</span>}
        name="respondent"
        labelCol={{ span: 24 }}
        rules={[{ required: true, message: "This field is required" }]}
      >
        <Input
          size="large"
          placeholder="Enter Respondent Name (ex. Juan Dela Cruz)"
        />
      </Form.Item>
      <Form.Item
        label={<span className="form-label">Respondent Statement</span>}
        name="respondent_statement"
        labelCol={{ span: 24 }}
        rules={[{ required: true, message: "This field is required" }]}
      >
        <Input.TextArea
          size="large"
          rows={4}
          placeholder="Enter Respondent Statement"
        />
      </Form.Item>
      <Form.Item
        placeholder="Select In-charge"
        label={<span className="form-label">In-Charge (Full Name)</span>}
        name="incharge"
        labelCol={{ span: 24 }}
        rules={[{ required: true, message: "This field is required" }]}
      >
        <Select size="large" placeholder="Select In-charge">
          {inChargeChoices?.map((e) => (
            <>
              <Option value={e.value}>{e.label}</Option>
            </>
          ))}
        </Select>
      </Form.Item>
      {incharge_value === "OTHER" ? (
        <>
          <Form.Item
            placeholder="Input In-charge"
            label={<span className="form-label">Other</span>}
            name="other_incharge"
            labelCol={{ span: 24 }}
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input placeholder="Input In-charge" size="large" />
          </Form.Item>
        </>
      ) : null}
      <Form.Item
        label={<span className="form-label">Resolution</span>}
        name="resolution"
        labelCol={{ span: 24 }}
        rules={[{ required: true, message: "This field is required" }]}
      >
        <Input.TextArea size="large" rows={4} placeholder="Enter Resolution" />
      </Form.Item>
      {initialData?.status !== undefined ? (
        <>
          {" "}
          <Form.Item
            label={<span className="form-label">Status</span>}
            labelCol={{ span: 24 }}
            name="status"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Status"
              defaultValue={false}
              size="large"
              disabled={loading}
            >
              <Option value="PENDING">
                {" "}
                <Tag color="magenta">
                  <strong>Pending / Ongoing</strong>
                </Tag>
              </Option>
              <Option value="SOLVED">
                <Tag color="green">
                  <strong>Solved</strong>
                </Tag>
              </Option>
            </Select>
          </Form.Item>{" "}
        </>
      ) : null}
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
        <Button type="default" onClick={() => navigate(BlotterListPath)}>
          <strong>Cancel</strong>
        </Button>
      </Form.Item>
    </>
  );
};

export default BlotterForm;
