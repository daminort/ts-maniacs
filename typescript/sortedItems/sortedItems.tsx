import React, { useCallback, useMemo } from "react";

// TASK: LIST AUTO-GENERATION BY UNION TYPES

/**
 * STEP 1
 * COMMON CASE LIST LOGIC
 */
type SortedItemsProps<T extends { id: string }> = {
  dataSet: T[];
  sortKey: keyof T;
  formatter: (data: T) => string;
};

const SortedItems = <T extends { id: string }>({
  dataSet,
  sortKey,
  formatter,
}: SortedItemsProps<T>) => {
  const sortedSet = useMemo(
    () => [...dataSet].sort((a, b) => +(a[sortKey] > b[sortKey])),
    [dataSet, sortKey]
  );
  return (
    <ul>
      {sortedSet.map((record) => (
        <li key={record.id}>{formatter(record)}</li>
      ))}
    </ul>
  );
};

/**
 * STEP 2
 * HOC FOR SPECIAL UNION WITH SOME WRAPPED LOGIC:
 * - FORMATTER
 * - SORT_KEY
 */
type TypeBase = { id: string; value: number };
type TypeA = TypeBase & { name: string };
type TypeB = TypeBase & { label: string };
type TypeC = TypeBase & { title: string };
type TypeUnion = TypeA | TypeB | TypeC;

const hocSortKeys = ["name", "label", "title"];
const hocPredicate = (key: string) => hocSortKeys.includes(key);
const hocGetSortKey = <T extends TypeUnion>(data: T) =>
  (Object.keys(data).find(hocPredicate) ?? "id") as keyof T;

const SortedItemsTypeHOC = <T extends TypeUnion>({
  dataSet,
}: Pick<SortedItemsProps<T>, "dataSet">) => {
  const sortKey = useMemo(() => hocGetSortKey(dataSet[0]), [dataSet]);
  const formatter = useCallback((data: T) => String(data[sortKey] ?? ""), []);
  return (
    <SortedItems dataSet={dataSet} sortKey={sortKey} formatter={formatter} />
  );
};

// USAGE

const setA: TypeA[] = [
  { id: "abc", name: "Dodo", value: 12 },
  { id: "def", name: "Koko", value: 24 },
  { id: "adb", name: "MoMo", value: 10 },
];

const setB: TypeB[] = [
  { id: "abc", label: "Dodo", value: 12 },
  { id: "def", label: "Koko", value: 24 },
  { id: "adb", label: "MoMo", value: 10 },
];

const setC: TypeC[] = [
  { id: "abc", title: "Dodo", value: 12 },
  { id: "def", title: "Koko", value: 24 },
  { id: "adb", title: "MoMo", value: 10 },
];

const App = () => {
  return (
    <>
      <SortedItemsTypeHOC dataSet={setA} />
      <SortedItemsTypeHOC dataSet={setB} />
      <SortedItemsTypeHOC dataSet={setC} />
    </>
  );
};
