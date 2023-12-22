import React from "react";
import { Table } from "antd";

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
    name: "Jasur",
    minuses: -68,
  },
  {
    key: "2",
    name: "Beknazar",
    minuses: -27,
  },
  {
    key: "3",
    name: "Jamshid",
    minuses: -67,
  },
  {
    key: "4",
    name: "Ulug'bek",
    minuses: -29,
  },
  {
    key: "5",
    name: "Madina",
    minuses: -30,
  },
  {
    key: "6",
    name: "Mohidil",
    minuses: -51,
  },
  {
    key: "7",
    name: "Dildora",
    minuses: -27,
  },
  {
    key: "8",
    name: "Muhlisa",
    minuses: -4,
  },
  {
    key: "9",
    name: "Sarvinoz",
    minuses: -25,
  },
  {
    key: "10",
    name: "Odina",
    minuses: -14,
  },
];
const List = () => <Table columns={columns} dataSource={data} />;
export default List;
