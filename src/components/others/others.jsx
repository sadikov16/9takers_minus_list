import React from "react";
import { Table } from "antd";

export function Others() {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Minuses",
      dataIndex: "minuses",
      key: "minuses",
    },
  ];
  const data = [
    {
      key: "1",
      name: "Retell a text",
      minuses: 15,
    },
    {
      key: "2",
      name: "A corridor ceaning",
      minuses: 30,
    },
    {
      key: "3",
      name: "7 push ups/sit ups",
      minuses: "for a minus",
    },
    {
      key: "4",
      name: "A room cleaning",
      minuses: 20,
    },
    {
      key: "5",
      name: "1.000 uzs ",
      minuses: "for a minus",
    },
    {
      key: "6",
      name: "Phone to parents",
      minuses: -50,
    },
  ];
  const columnss = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Minuses",
      dataIndex: "minuses",
      key: "minuses",
    },
  ];
  const dataa = [
    {
      key: "1",
      name: "Absence",
      minuses: 30,
    },
    {
      key: "2",
      name: "Lateness (for 15 minutes)",
      minuses: 10,
    },
    {
      key: "3",
      name: "Ring",
      minuses: 10,
    },
    {
      key: "4",
      name: "Homework (for each one)",
      minuses: 10,
    },
    {
      key: "5",
      name: "Over 25 minuses",
      minuses: " not allowed to class",
    },
  ];
  const columnsss = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Minuses",
      dataIndex: "minuses",
      key: "minuses",
    },
  ];
  const dataaa = [
    {
      key: "1",
      name: "Done all homewor",
      minuses: +10,
    },
    {
      key: "2",
      name: "Find 4/5 words",
      minuses: "+5/10",
    },
    {
      key: "3",
      name: "Presentation",
      minuses: +20,
    },
  ];
  return (
    <body>
      <div>
        <p>Deletingt punishments</p>
        <Table columns={columns} dataSource={data} />
      </div>
      <div>
        <p>Punishments</p>
        <Table columns={columnss} dataSource={dataa} />
      </div>
      <div>
        <p>Rewards</p>
        <Table columns={columnsss} dataSource={dataaa} />
      </div>
    </body>
  );
}
