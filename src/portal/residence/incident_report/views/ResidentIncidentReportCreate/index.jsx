import { Card, Form } from "antd";
import React from "react";
import usePost from "../../../../../hooks/usePost";
import { useUser } from "../../../../context/auth/context";
import { CREATE_INCIDENT_REPORT } from "../../api";
import IncidentReportForm from "../../components/IncidentReportForm";
import useNotify from "../../../../hooks/useNotify";
import { useNavigate } from "react-router-dom";

const ResidentIncidentReportCreate = () => {
  const [form] = Form.useForm();
  const { user } = useUser();
  const notify = useNotify();
  const navigate = useNavigate();
  const [createIncidentReport] = usePost({
    onComplete: () => {
      notify("success", "Incident Report has been submited!");
      navigate("/portal/residence/incident_report");
    },
  });

  const handleCreateIncidentReport = (data) => {
    createIncidentReport({
      url: CREATE_INCIDENT_REPORT,
      data: {
        ...data,
        claimant: user.id,
      },
    });
  };

  const initialData = {
    subject: null,
    description: null,
    incident_date_time: null,
  };

  return (
    <>
      <Card title="Create Incident Report">
        <Form
          form={form}
          onFinish={handleCreateIncidentReport}
          initialValues={initialData}
        >
          <IncidentReportForm />
        </Form>
      </Card>
    </>
  );
};

export default ResidentIncidentReportCreate;
