// import React, { useMemo } from 'react';

// const setA = [
//   { id: 'abc', name : 'Dodo' , value: 12 },
//   { id: 'def', name : 'Koko' , value: 24 },
//   { id: 'adb', name : 'MoMo' , value: 10 },
// ];

// const setB = [
//   { id: 'abc', label : 'Dodo' , value: 12 },
//   { id: 'def', label : 'Koko' , value: 24 },
//   { id: 'adb', label : 'MoMo' , value: 10 },
// ];

// const setC = [
//   { id: 'abc', title : 'Dodo' , value: 12 },
//   { id: 'def', title : 'Koko' , value: 24 },
//   { id: 'adb', title : 'MoMo' , value: 10 },
// ];

// const SortedItems = ({ dataSet }) => {

//   const sortKey = useMemo(() => {
//     const record = dataSet[0];
//     if (record.name) { return 'name' };
//     if (record.label) { return 'label' };
//     if (record.title) { return 'title' };
//     return 'id';
//   }, [dataSet]);

//   const sortedSet = useMemo(() => {
//     return [...dataSet].sort((a, b) => a[sortKey] - b[sortKey]);
//   }, [dataSet, sortKey]);

//   return (
//     <ul>
//       {sortedSet.map((record) => {
//         const { id, value } = record;
//         const title = String(record[sortedSet]).toUpperCase();

//         return (
//           <li key={id}>{`${title}: ${value}`}</li>
//         );
//       }}
//     </ul>
//   )
// }

// // usage

// const App = () => {
//   return (
//     <>
//       <SortedItems dataSet={setA} />
//       <SortedItems dataSet={setB} />
//       <SortedItems dataSet={setC} />
//     </>
//   );
// };
