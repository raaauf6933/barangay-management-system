import { Card, Form } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../../../hooks/useFetch";
import usePost from "../../../../../hooks/usePost";
import useNotify from "../../../../hooks/useNotify";
import { GET_RESIDENTS } from "../../../issuance_management/api";
import { GET_OFFICIALS } from "../../../officials/api";
import { CREATE_BLOTTER_REPORT } from "../../api";
import BlotterForm from "../../components/BlotterForm";
import { BlotterDetailssUrl } from "../../url";

const BlotterReportCreate = () => {
  const [form] = Form.useForm();
  const incharge_value = Form.useWatch(["incharge"], form);
  const navigate = useNavigate();
  const notify = useNotify();

  const { response, refetch: refetchResidents } = useFetch({
    url: GET_RESIDENTS,
  });

  const { response: responseOfficials, refetch: refetchOfficials } = useFetch({
    url: GET_OFFICIALS,
    params: {
      status: true,
    },
  });

  const officials = responseOfficials?.data?.officials;

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
    other_incharge: null,
    resolution: "",
    incharge: null,
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
            officials={officials}
            refetchOfficials={refetchOfficials}
            incharge_value={incharge_value}
          />
        </Form>
      </Card>
    </>
  );
};

export default BlotterReportCreate;
