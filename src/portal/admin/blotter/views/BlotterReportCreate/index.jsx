import { Card, Form } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../../../hooks/useFetch";
import usePost from "../../../../../hooks/usePost";
import useNotify from "../../../../hooks/useNotify";
import { GET_RESIDENTS } from "../../../issuance_management/api";
import { CREATE_BLOTTER_REPORT } from "../../api";
import BlotterForm from "../../components/BlotterForm";
import { BlotterDetailssUrl } from "../../url";

const BlotterReportCreate = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const notify = useNotify();

  const { response, refetch: refetchResidents } = useFetch({
    url: GET_RESIDENTS,
  });

  const residents = response?.data?.residents;

  const [createBlotterReport] = usePost({
    onComplete: (e) => {
      notify("success", "New Report has been created!");

      navigate(BlotterDetailssUrl(e?.data?.blotter?.id));
    },
    onError: (e) => {
      notify("error", e.response?.data?.message);
    },
  });

  const initialData = {
    complainant: null,
    respondent: null,
    statement: "",
    respondent_statement: "",
    resolution: "",
    incharge: "",
  };

  const handleCreateReport = (data) => {
    createBlotterReport({
      url: CREATE_BLOTTER_REPORT,
      data,
    });
  };

  return (
    <>
      <Card title="Create Report">
        <Form form={form} onFinish={handleCreateReport}>
          <BlotterForm
            initialData={initialData}
            residents={residents}
            refetchResidents={refetchResidents}
            navigate={navigate}
          />
        </Form>
      </Card>
    </>
  );
};

export default BlotterReportCreate;
