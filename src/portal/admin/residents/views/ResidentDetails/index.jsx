import { Card } from "antd";
import React from "react";
import ResidentForm from "../../components/ResidentForm";
import usePost from "../../../../../hooks/usePost";
import useFetch from "../../../../../hooks/useFetch";
import useNotify from "../../../../hooks/useNotify";
import { CREATE_RESIDENT, EDIT_RESIDENT, GET_RESIDENT } from "../../api";
import { useNavigate, useParams } from "react-router-dom";
import { ResidentsListPath } from "../../url";

const ResidentDetails = () => {
  const navigate = useNavigate();
  const notify = useNotify();
  const { id } = useParams();

  const { response, loading } = useFetch(
    {
      url: GET_RESIDENT,
      params: {
        id,
      },
    },
    {
      skip: !id,
    }
  );

  const [editResident, editResidentOpts] = usePost({
    onComplete: () => {
      notify("success", "New Resident has been added!");
      navigate(ResidentsListPath);
    },
    onError: (e) => {
      notify("error", e.response.data.message);
    },
  });

  const handleSubmit = (formData) => {
    editResident({
      url: EDIT_RESIDENT,
      data: {
        ...formData,
        id,
      },
    });
  };
  return (
    <>
      <Card title="Edit Resident">
        <ResidentForm
          onSubmit={handleSubmit}
          data={response?.data?.resident}
          loading={editResidentOpts.loading}
        />
      </Card>
    </>
  );
};

export default ResidentDetails;
