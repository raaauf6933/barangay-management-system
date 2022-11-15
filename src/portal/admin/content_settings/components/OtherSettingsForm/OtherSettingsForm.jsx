import { Button, Card, Input } from "antd";
import React from "react";
import { useState } from "react";
import usePost from "../../../../../hooks/usePost";
import useNotify from "../../../../hooks/useNotify";
import { UPDATE_COLOR } from "../../api";

const OtherSettingsForm = () => {
  const [value, setValue] = useState("");
  const notify = useNotify();
  const [updateColor, updateColorOpts] = usePost({
    onComplete: () => {
      notify("success", "Update success!");
    },
  });

  const handleSubmit = () => {
    updateColor({
      url: UPDATE_COLOR,
      data: {
        value: value,
        type: "COLOR",
      },
    });
  };

  return (
    <Card title="Other Settings">
      <Input
        placeholder="Enter Color Code (Hex Format ex. #eb4034)"
        size="large"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></Input>
      <div
        style={{
          marginTop: "2em",
        }}
      >
        <Button
          type="primary"
          disabled={!value}
          loading={updateColorOpts.loading}
          onClick={handleSubmit}
        >
          <strong>Save</strong>
        </Button>
      </div>
    </Card>
  );
};

export default OtherSettingsForm;
