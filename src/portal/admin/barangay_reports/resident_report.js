import moment from "moment-timezone";

const createDataRows = (data) => {
  const rowBody = data.map((resident) => {
    return [
      {
        text: `${resident.first_name}`,
        style: "tableBody",
      },
      {
        text: `${resident.last_name}`,
        style: "tableBody",
      },
      {
        text: `${resident.middle_name}`,
        style: "tableBody",
      },
      {
        text: `${resident.gender}`,
        style: "tableBody",
      },
      {
        text: `${moment(resident.birth_date).format(
          "YYYY-MM-DD"
        )} - ${moment().diff(resident.birth_date, "years")}`,
        style: "tableBody",
      },
      {
        text: `${resident.house_no}`,
        style: "tableBody",
      },
      {
        text: `${resident.street_address}`,
        style: "tableBody",
      },
      {
        text: `${resident.civil_status}`,
        style: "tableBody",
      },
      {
        text: `${resident.is_voter ? "YES" : "NO"}`,
        style: "tableBody",
      },
    ];
  });

  if (data.length === 0) {
    return [[{ text: "NO DATA", colSpan: 9, alignment: "center" }]];
  } else {
    return rowBody;
  }
};

const residentReport = ({ residents }, user_name) => {
  console.log(residents);
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
        text: "RESIDENTS",
        style: {
          fontSize: 21,
          bold: true,
          alignment: "center",
        },
      },
      {
        margin: [0, 20, 0, 0],
        text: `Total Residents : ${residents.length}`,
        style: {
          fontSize: 14,
          bold: true,
          alignment: "left",
        },
      },
      {
        margin: [0, 0, 0, 0],
        text: `Total Voter : ${residents.filter((e) => e.is_voter).length}`,
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
          widths: [
            "auto",
            "auto",
            "auto",
            "auto",
            "auto",
            "auto",
            "auto",
            "auto",
            "auto",
          ],
          body: [
            [
              {
                text: "First name",
                style: "tableheader",
              },
              {
                text: "Last name",
                style: "tableheader",
              },
              {
                text: "Middle name",
                style: "tableheader",
              },
              {
                text: "Gender",
                style: "tableheader",
              },
              {
                text: "Birth Date - Age",
                style: "tableheader",
              },
              {
                text: "House no.",
                style: "tableheader",
              },
              {
                text: "Street",
                style: "tableheader",
              },
              {
                text: "Civil Status",
                style: "tableheader",
              },
              {
                text: "Is voter",
                style: "tableheader",
              },
            ],
            ...createDataRows(residents),
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

export default residentReport;
