import { Button, Form, Input, Select, Tag } from "antd";
import React from "react";
import SingleSelect from "../../../../components/SingleSelect";
import { BlotterListPath } from "../../url";

const { Option } = Select;
const BlotterForm = (props) => {
  const { refetchResidents, initialData, loading, navigate } = props;

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

  return (
    <>
      <Form.Item
        label={<span className="form-label">Complainant</span>}
        name="resident"
        labelCol={{ span: 24 }}
        rules={[{ required: true, message: "This field is required" }]}
      >
        <SingleSelect
          placeholder="Search Resident"
          size="large"
          name="resident"
          fetchOptions={getResidents}
          searchValue={initialData?.resident_label}
          disabled={initialData?.resident_label || loading}
        />
      </Form.Item>

      <Form.Item
        label={<span className="form-label">Respondent</span>}
        name="respondent"
        labelCol={{ span: 24 }}
        rules={[{ required: true, message: "This field is required" }]}
      >
        <Input size="large" />
      </Form.Item>
      <Form.Item
        label={<span className="form-label">In-Charge </span>}
        name="incharge"
        labelCol={{ span: 24 }}
        rules={[{ required: true, message: "This field is required" }]}
      >
        <Input size="large" />
      </Form.Item>
      <Form.Item
        label={<span className="form-label">Statement</span>}
        name="statement"
        labelCol={{ span: 24 }}
        rules={[{ required: true, message: "This field is required" }]}
      >
        <Input.TextArea size="large" rows={4} />
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
                  <strong>Pending</strong>
                </Tag>
              </Option>
              <Option value="SOLVED">
                <Tag color="green">
                  <strong>SOLVED</strong>
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
