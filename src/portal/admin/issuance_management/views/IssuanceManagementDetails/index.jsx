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
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import BarangayClearanceTemplate from "../../pdf-templates/barangay_clearance";

// pdfMake.vfs = pdfFonts.pdfMake.vfs;

pdfMake.fonts = {
  ...pdfMake.fonts,
  basker: {
    normal:
      "https://res.cloudinary.com/dlwccjs49/raw/upload/v1667038743/fonts/Baskervville-Regular_y6wlll.ttf",
  },
  Roboto: {
    normal:
      "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf",
    bold: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf",
    italics:
      "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf",
    bolditalics:
      "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf",
  },
  dafoe: {
    normal:
      "https://res.cloudinary.com/dlwccjs49/raw/upload/v1667040253/fonts/MrDafoe-Regular_l57lv4.ttf",
  },
};

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
    resident_label: `${data?.Resident?.first_name}  ${data?.Resident?.middle_name} ${data?.Resident?.last_name}`,
    issuance_type: data?.issuance_id,
    purpose: data?.purpose,
    remarks: data?.remarks,
    payment_status: data?.Service_transaction?.isPaid,
    status: data?.status,
  };

  useEffect(() => {
    form.setFieldsValue(initialData);
  }, [loading]);

  const handlePrintPdf = () => {
    pdfMake.createPdf(BarangayClearanceTemplate()).open();
  };

  return (
    <>
      <Card title={`#${id}`}>
        <>
          <Form
            form={form}
            initialValues={initialData}
            onFinish={handleSubmit}
            scrollToFirstError
          >
            <IssuanceForm
              loading={editResidentIssuanceOpts.loading}
              initialData={initialData}
              handlePrintPdf={handlePrintPdf}
            />
          </Form>
        </>
      </Card>
    </>
  );
};

export default IssuanceManagementDetails;
