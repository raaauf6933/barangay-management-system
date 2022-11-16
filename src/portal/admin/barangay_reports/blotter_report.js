import moment from "moment-timezone";

const createDataRows = (data) => {
  const rowBody = data.map((blotter) => {
    return [
      {
        text: blotter.complainant,
        style: "tableBody",
      },
      {
        text: `${blotter.respondent}`,
        style: "tableBody",
      },
      {
        text: blotter.in_charge
          ? `${blotter?.Official?.first_name} ${blotter?.Official?.last_name}`
          : blotter?.other_incharge,
        style: "tableBody",
      },
      {
        text: `${blotter.status}`,
        style: "tableBody",
      },
      {
        text: `${moment(blotter.createdAt).format("LL")}`,
        style: "tableBody",
      },
    ];
  });

  if (data.length === 0) {
    return [[{ text: "NO DATA", colSpan: 5, alignment: "center" }]];
  } else {
    return rowBody;
  }
};

const blotterReport = ({ blotter }, user_name) => {
  console.log(blotter);

  return {
    footer: {
      margin: [5, 15, 10, 5],
      height: 30,
      columns: [
        {
          alignment: "left",
          text: [
            {
              text: `PREPARED BY : ${user_name} `,
              italics: true,
            },
          ],
        },
        {
          alignment: "right",
          text: [
            {
              text: `As of ${moment().format("LLL")}`,
              italics: true,
            },
          ],
        },
      ],
    },
    content: [
      {
        alignment: "justify",
        columns: [
          {
            margin: [0, 10, 0, 0],
            text: "Barangay 845 Zone 92, Pandacan",
            style: {
              fontSize: 22,
              bold: true,
              alignment: "center",
            },
          },
        ],
      },
      {
        alignment: "justify",
        columns: [
          {
            margin: [0, 10, 0, 0],
            text: "City of Manila",
            style: {
              fontSize: 21,
              alignment: "center",
            },
          },
        ],
      },
      {
        margin: [0, 40, 0, 0],
        text: "BLOTTER REPORTS",
        style: {
          fontSize: 21,
          bold: true,
          alignment: "center",
        },
      },
      {
        margin: [0, 20, 0, 0],
        text: `Total Blotter Reports : ${blotter.length}`,
        style: {
          fontSize: 14,
          bold: true,
          alignment: "left",
        },
      },
      {
        margin: [0, 0, 0, 0],
        text: `Total Pending Reports : ${
          blotter.filter((e) => e.status === "PENDING").length
        }`,
        style: {
          fontSize: 14,
          bold: true,
          alignment: "left",
        },
      },
      {
        margin: [0, 0, 0, 0],
        text: `Total Solved Reports : ${
          blotter.filter((e) => e.status === "SOLVED").length
        }`,
        style: {
          fontSize: 14,
          bold: true,
          alignment: "left",
        },
      },
      {
        style: "tableExample",
        margin: [0, 10, 10, 10],
        table: {
          widths: ["*", "*", "*", "*", "*"],
          body: [
            [
              {
                text: "Complainant",
                style: "tableheader",
              },
              {
                text: "Respondent",
                style: "tableheader",
              },
              {
                text: "In-Charge",
                style: "tableheader",
              },
              {
                text: "Status",
                style: "tableheader",
              },
              {
                text: "Created At",
                style: "tableheader",
              },
            ],
            ...createDataRows(blotter),
          ],
        },
      },
    ],
    styles: {
      header: {
        fontSize: 22,
        bold: true,
      },
      tableheader: {
        bold: true,
        fontWeight: 600,
        margin: [5, 5, 5, 5],
      },
      tableBody: {
        margin: [5, 5, 5, 5],
      },
      date: {
        fontSize: 16,
        alignment: "right",
      },
      total_currency: {
        fontSize: 15,
        bold: true,
        alignment: "justify",
      },
      title1: {
        fontSize: 14,
        bold: true,
        alignment: "justify",
      },
      title2: {
        fontSize: 14,
        bold: false,
        alignment: "justify",
      },
    },
    defaultStyle: {
      columnGap: 20,
    },
    pageOrientation: "landscape",
  };
};

export default blotterReport;
