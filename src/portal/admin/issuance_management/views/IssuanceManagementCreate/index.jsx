import { Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import usePost from "../../../../../hooks/usePost";
import FormComponent from "../../../../components/Form";
import useNotify from "../../../../hooks/useNotify";
import { CREATE_RESIDENT_ISSUANCE } from "../../api";
import IssuanceForm from "../../components/IssuanceForm";
import { IssuanceMngtListPath } from "../../url";

const IssuanceManagementCreate = () => {
  const notify = useNotify();
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

  const handleSubmit = async (form) => {
    await createResidentIssuance({
      url: CREATE_RESIDENT_ISSUANCE,
      data: form,
    });
  };

  const initialData = {
    resident: "",
    issuance_type: null,
    purpose: "",
    remarks: "",
  };

  return (
    <>
      <Card title="Create Issuance">
        <FormComponent initial={initialData} onSubmit={handleSubmit}>
          {({ data, change, submit }) => (
            <>
              <IssuanceForm
                data={data}
                change={change}
                submit={submit}
                loading={createResidentIssuanceOpts.loading}
              />
            </>
          )}
        </FormComponent>
      </Card>
    </>
  );
};

export default IssuanceManagementCreate;
