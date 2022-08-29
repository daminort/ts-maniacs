// import React from 'react';

// const columns = [
//   { key: 'name', title: 'Name' },
//   { key: 'location', title: 'Location' },
// ];

// const rows = [
//   { id: 1, name: 'John Snow', location: 'Wall' },
//   { id: 2, name: 'Aria Stark', location: 'Braavos' },
//   { id: 2, name: 'Tirion Lannister', location: 'Meerin' },
// ];

// const Table = ({ columns, rows }) => {

//   const renderHeadCell = (column) => {
//     const { key, title } = column;
//     return (
//       <td key={key}>{title}</td>
//     );
//   };

//   const renderCell = (row, column) => {
//     const { key } = column;
//     return (
//       <td>{row[key]}</td>
//     );
//   };

//   const renderRow = (row) => {
//     const { id } = row;
//     return (
//       <tr key={id}>
//         {columns.map(column => renderCell(row, column))}
//       </tr>
//     );
//   };

//   return (
//     <table>
//       <thead>
//         <tr>
//           {columns.map(column => renderHeadCell(column))}
//         </tr>
//       </thead>
//       <tbody>
//         {rows.map(row => renderRow(row))}
//       </tbody>
//     </table>
//   )
// }

// // usage

// const App = () => {
//   return (
//     <Table
//       columns={columns}
//       rows={rows}
//     />
//   )
// };
