import { Card, Form } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import usePost from "../../../../../hooks/usePost";
import useNotify from "../../../../hooks/useNotify";
import { CREATE_RESIDENT_ISSUANCE, GET_RESIDENTS } from "../../api";
import IssuanceForm from "../../components/IssuanceForm";
import useFetch from "../../../../../hooks/useFetch";
import { IssuanceMngtListPath } from "../../url";

const IssuanceManagementCreate = () => {
  const notify = useNotify();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [createResidentIssuance, createResidentIssuanceOpts] = usePost({
    onComplete: () => {
      notify("success", "Request has been created!");
      navigate(IssuanceMngtListPath);
    },
    onError: (e) => {
      notify("error", e.response?.data?.message);
    },
  });

  const {
    response,
    loading: residentsLoading,
    refetch: refetchResidents,
  } = useFetch({
    url: GET_RESIDENTS,
  });

  const residents = response?.data?.residents;

  const handleSubmit = async (form) => {
    const newData = {
      ...form,
      resident: form.resident.value,
    };
    await createResidentIssuance({
      url: CREATE_RESIDENT_ISSUANCE,
      data: newData,
    });
  };

  const initialData = {
    resident: undefined,
    issuance_type: undefined,
    purpose: "",
    remarks: "",
  };

  return (
    <>
      <Card title="Create Issuance">
        <>
          <Form form={form} initialValues={initialData} onFinish={handleSubmit}>
            <IssuanceForm
              loading={createResidentIssuanceOpts.loading}
              residents={residents}
              refetchResidents={refetchResidents}
            />
          </Form>
        </>
      </Card>
    </>
  );
};

export default IssuanceManagementCreate;
