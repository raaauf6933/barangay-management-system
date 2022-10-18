import React from "react";
import { Table as AntdTable } from "antd";
import { UseColumnSearch } from "./utils";

const Table = (props) => {
  const { columns, searchColumns } = props;

  const getColumnSearchProps = UseColumnSearch();

  let tbl_columns = columns?.map((e) => ({
    ...e,
    ...(searchColumns && searchColumns.includes(e.dataIndex)
      ? { ...getColumnSearchProps(e.dataIndex) }
      : {}),
  }));

  return <AntdTable {...props} columns={tbl_columns} />;
};

export default Table;
