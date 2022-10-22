// playground requires you to assign document definition to a variable called dd

const BarangayClearanceTemplate = () => {
  return {
    info: {
      title: "awesome Document",
      author: "john doe",
      subject: "subject of document",
      keywords: "keywords for document",
    },
    content: [
      "First paragraph",
      "Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines",
    ],
  };
};

export default BarangayClearanceTemplate;
