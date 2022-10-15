import { Card, Form } from "antd";
import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../../../hooks/useFetch";
import usePost from "../../../../../hooks/usePost";
import useNotify from "../../../../hooks/useNotify";
import { EDIT_RESIDENT_ISSUANCE, GET_RESIDENT_ISSUANCE } from "../../api";
import IssuanceForm from "../../components/IssuanceForm";
import { IssuanceMngtListPath } from "../../url";

const IssuanceManagementDetails = () => {
  const notify = useNotify();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { id } = useParams();

  const { response, loading } = useFetch({
    url: GET_RESIDENT_ISSUANCE,
    params: {
      id,
    },
  });

  const data = response?.data?.issuance_resident;

  const [editResidentIssuance, editResidentIssuanceOpts] = usePost({
    onComplete: () => {
      notify("success", "Request has been updated successfully!");
      navigate(IssuanceMngtListPath);
    },
    onError: (e) => {
      notify("error", "Error", e.response?.data?.message);
    },
  });

  const handleSubmit = async (form) => {
    const newData = {
      ...form,
      resident: form?.resident?.value ? form?.resident?.value : form.resident,
    };

    await editResidentIssuance({
      url: EDIT_RESIDENT_ISSUANCE,
      data: newData,
      params: {
        id,
      },
    });
  };

  const initialData = {
    resident: data?.resident_id,
    issuance_type: data?.issuance_id,
    purpose: data?.purpose,
    remarks: data?.remarks,
  };

  useEffect(() => {
    form.setFieldsValue(initialData);
  }, [loading]);

  return (
    <>
      <Card title={`#${id}`}>
        <>
          <Form form={form} initialValues={initialData} onFinish={handleSubmit}>
            <IssuanceForm loading={editResidentIssuanceOpts.loading} />
          </Form>
        </>
      </Card>
    </>
  );
};

export default IssuanceManagementDetails;
