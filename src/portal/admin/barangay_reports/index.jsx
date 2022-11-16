import { Button, Card, Col, Row, Select, Space } from "antd";
import React from "react";
import { useState } from "react";
import usePost from "../../../hooks/usePost";
import { GET_RESIDENTS } from "../residents/api";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import residentReport from "./resident_report";
import blotterReport from "./blotter_report";
import { useUser } from "../../context/auth/context";
import { GET_BLOTTER_REPORTS } from "../blotter/api";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const BarangayReports = () => {
  const [report, setReport] = useState("");
  const { user } = useUser();
  const [getResidents, getResidentsOpts] = usePost({});
  const [getBlotters, getBlottersOpts] = usePost({});

  const handleGenerateReport = async () => {
    if (report === "RESIDENT") {
      const result = await getResidents({
        url: GET_RESIDENTS,
        method: "GET",
      });

      pdfMake
        .createPdf(
          residentReport(result.data, `${user.first_name} ${user.last_name}`)
        )
        .open();
    }

    if (report === "BLOTTER") {
      const result = await getBlotters({
        url: GET_BLOTTER_REPORTS,
        method: "GET",
      });
      pdfMake
        .createPdf(
          blotterReport(result.data, `${user.first_name} ${user.last_name}`)
        )
        .open();
    }
  };

  return (
    <Row align="middle" justify="center">
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Card title="Barangay Report">
          <div className="my-profile-content">
            <div
              style={{
                width: "100%",
              }}
            >
              <Select
                placeholder="Select Type of Report"
                style={{
                  width: "100%",
                }}
                size="large"
                value={report}
                onChange={(e) => setReport(e)}
              >
                <Select.Option value="RESIDENT">
                  <strong>Residents</strong>
                </Select.Option>
                <Select.Option value="BLOTTER">
                  <strong>Blotter</strong>
                </Select.Option>
              </Select>

              <Button
                type="primary"
                block
                style={{
                  width: "100%",
                  marginTop: "2em",
                }}
                disabled={!report}
                onClick={handleGenerateReport}
                loading={getResidentsOpts.loading || getBlottersOpts.loading}
              >
                Generate
              </Button>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default BarangayReports;
