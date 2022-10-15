import React from "react";
import { Form, Input, Select, Button } from "antd";
import { IssuanceMngtListPath } from "../../url";
import { useNavigate } from "react-router-dom";
import SingleSelect from "../../../../components/SingleSelect";

const { Option } = Select;

const IssuanceForm = (props) => {
  const {
    data,
    change,
    submit,
    loading,
    hasChanged,
    residents,
    residentsLoading,
    refetchResidents,
  } = props;
  const navigate = useNavigate();
  const issuance_types = [
    {
      label: "Barangay Clearance",
      value: 1,
    },
    {
      label: "Certificate Of Indigency",
      value: 2,
    },
    {
      label: "Certificate Of Residency",
      value: 3,
    },
    {
      label: "Barangay Business Clearance",
      value: 4,
    },
  ];

  // const isFormIsValid =
  //   data.fields.some((e) => e?.errors?.length === 0) && hasChanged;

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
      {/* <Form
        fields={data.fields}
        onFieldsChange={(_, newFields) => {
          change(newFields);
        }}
        scrollToFirstError
      > */}
      <Form.Item
        label={<span className="form-label">Resident</span>}
        name="resident"
        labelCol={{ span: 24 }}
        rules={[{ required: true, message: "This field is required" }]}
      >
        <SingleSelect
          placeholder="Search Resident"
          size="large"
          //   value={data.title}
          //   defaultValue={data.title}
          name="resident"
          fetchOptions={getResidents}
          // onChange={(e) =>
          //   change({
          //     target: {
          //       name: "resident",
          //       value: e.value,
          //     },
          //   })
          // }
          // value={data.resident}
          //   disabled={loading}
        />
      </Form.Item>
      <Form.Item
        label={<span className="form-label">Issuance Type</span>}
        labelCol={{ span: 24 }}
        name="issuance_type"
        rules={[{ required: true, message: "This field is required" }]}
      >
        <Select
          placeholder="Select Issuance Type"
          size="large"
          //   value={data.title}
          //   defaultValue={data.title}
          name="issuance_type"
          // onChange={(e) =>
          //   change({
          //     target: {
          //       name: "issuance_type",
          //       value: e,
          //     },
          //   })
          // }
          // value={data.issuance_type}

          //   disabled={loading}
        >
          {issuance_types.map((e) => (
            <Option key={e.value} value={e.value}>
              {e.label}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label={<span className="form-label">Purpose</span>}
        labelCol={{ span: 24 }}
        name="purpose"
        rules={[{ required: true, message: "This field is required" }]}
        validateFirst
      >
        <Input.TextArea
          placeholder="Input Purpose"
          size="large"
          showCount
          maxLength={100}
          style={{ height: 120, resize: "none" }}
          // onChange={change}
          // value={data.purpose}
          // defaultValue={data.purpose}
          name="purpose"
        />
      </Form.Item>
      <Form.Item
        label={<span className="form-label">Remarks</span>}
        labelCol={{ span: 24 }}
        name="remarks"
        rules={[{ required: false }]}
      >
        <Input.TextArea
          placeholder="Input Remarks"
          size="large"
          showCount
          maxLength={100}
          style={{ height: 120, resize: "none" }}
          // name="remarks"
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
          // disabled={!isFormIsValid}
        >
          <strong>Submit</strong>
        </Button>
        <Button type="default" onClick={() => navigate(IssuanceMngtListPath)}>
          <strong>Cancel</strong>
        </Button>
      </Form.Item>
      {/* </Form> */}
    </>
  );
};

export default IssuanceForm;
