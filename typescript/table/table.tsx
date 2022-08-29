import React from "react";

// TASK: REQUIRED TABLE FIELDS FROM COLUMNS

type Col = Record<"key" | "title", string>;
type Row<C extends Col> = Record<C["key"], string | number>;
type TableProps<C extends Col, R extends Row<C>> = {
  rows: R[];
  rowKey: keyof R;
  columns: readonly C[];
};

const renderHeadCell = <C extends Col>({ key, title }: C) => (
  <td key={key}>{title}</td>
);

const renderCell = <C extends Col, R extends Row<C>>(row: R, { key }: C) => (
  <td>{row[key]}</td>
);

const renderRow = <C extends Col, R extends Row<C>>(
  row: R,
  rowKey: keyof R
) => (
  <tr key={row[rowKey]}>
    {columns.map((column) => renderCell(row, column as C))}
  </tr>
);

const Table = <C extends Col, R extends Row<C>>({
  rows,
  rowKey,
  columns,
}: TableProps<C, R>) => (
  <table>
    <thead>
      <tr>{columns.map((column) => renderHeadCell(column))}</tr>
    </thead>
    <tbody>{rows.map((row) => renderRow(row, rowKey))}</tbody>
  </table>
);

// USAGE

const columns = [
  { key: "name", title: "Name" },
  { key: "location", title: "Location" },
] as const;

const rows = [
  { id: 1, name: "John Snow", location: "Wall", type: "" },
  { id: 2, name: "Aria Stark", location: "Braavos", type: "" },
  { id: 3, name: "Tirion Lannister", location: "Meerin", type: "" },
];

// "aaron-bond.better-comments" for VSCode colorize
// * name | location
// * ""   | ""       | 1
// * ""   | ""
// ! ""   | void     | 1
// ! ""   | void

const App = () => {
  return <Table columns={columns} rows={rows} rowKey="name" />;
};
