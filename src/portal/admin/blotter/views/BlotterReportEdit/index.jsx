import { Card, Form } from "antd";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../../../hooks/useFetch";
import usePost from "../../../../../hooks/usePost";
import useNotify from "../../../../hooks/useNotify";
import { GET_RESIDENTS } from "../../../issuance_management/api";
import { GET_OFFICIALS } from "../../../officials/api";
import { EDIT_BLOTTER_REPORT, GET_BLOTTER_REPORT } from "../../api";
import BlotterForm from "../../components/BlotterForm";
import { BlotterDetailssUrl } from "../../url";

const BlotterReportEdit = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const incharge_value = Form.useWatch(["incharge"], form);
  const navigate = useNavigate();
  const notify = useNotify();

  const { response: responseBlotter } = useFetch({
    url: GET_BLOTTER_REPORT,
    params: {
      id,
    },
  });

  const data = responseBlotter?.data?.blotter;

  const { response, refetch: refetchResidents } = useFetch({
    url: GET_RESIDENTS,
  });

  const residents = response?.data?.residents;

  const { response: responseOfficials, refetch: refetchOfficials } = useFetch({
    url: GET_OFFICIALS,
    params: {
      status: true,
    },
  });

  const officials = responseOfficials?.data?.officials;

  const [editBlotterReport] = usePost({
    onComplete: (e) => {
      console.log(e);
      notify("success", "Report has been successfully edited!");

      navigate(BlotterDetailssUrl(e?.data?.blotter?.id));
    },
    onError: (e) => {
      notify("error", e.response?.data?.message);
    },
  });

  const initialData = {
    complainant: data?.complainant,
    respondent: data?.respondent,
    statement: data?.statement,
    incharge: data?.other_incharge ? "OTHER" : parseInt(data?.in_charge),
    incharge_label: `${data?.Official?.first_name} ${data?.Official?.last_name}`,
    other_incharge: data?.other_incharge,
    respondent_statement: data?.respondent_statement,
    resolution: data?.resolution,
    status: data?.status,
  };

  useEffect(() => {
    form.setFieldsValue(initialData);
  }, [responseBlotter]);

  const handleCreateReport = (data) => {
    editBlotterReport({
      url: EDIT_BLOTTER_REPORT,
      data: {
        ...data,
        id,
      },
    });
  };

  return (
    <>
      <Card title="Edit Report">
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

export default BlotterReportEdit;
