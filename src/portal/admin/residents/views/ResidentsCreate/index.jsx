import { Card } from "antd";
import React from "react";
import ResidentForm from "../../components/ResidentForm";
import usePost from "../../../../../hooks/usePost";
import useNotify from "../../../../hooks/useNotify";
import { CREATE_RESIDENT } from "../../api";
import { useNavigate } from "react-router-dom";
import { ResidentsListPath } from "../../url";

const ResidentsCreate = () => {
  const navigate = useNavigate();
  const notify = useNotify();
  const [createResident] = usePost({
    onComplete: () => {
      notify("success", "New Resident has been added!");
      navigate(ResidentsListPath);
    },
  });

  const handleSubmit = (formData) => {
    createResident({
      url: CREATE_RESIDENT,
      data: formData,
    });
  };
  return (
    <>
      <Card title="Create Resident">
        <ResidentForm onSubmit={handleSubmit} />
      </Card>
    </>
  );
};

export default ResidentsCreate;
