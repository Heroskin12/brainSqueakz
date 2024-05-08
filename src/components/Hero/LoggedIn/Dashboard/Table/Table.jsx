import {
  getCoreRowModel,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";
import { useState } from "react";
import DATA from "./dummyData";
import EditableCell from "./EditableCell";

const columns = [
  {
    accessorKey: "resourceName",
    header: "Name",
    cell: EditableCell,
  },
  {
    accessorKey: "url",
    header: "URL",
    cell: (props) => <a href={props.getValue()}>{props.getValue()}</a>,
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "comments",
    header: "Comments",
    cell: (props) => <p>{props.getValue()}</p>,
  },
];

const Table = () => {
  const [data, setData] = useState(DATA);
  /* Contains all helper functions from the library */
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      updateData: (rowIndex, columnId, value) =>
        setData((prev) =>
          prev.map((row, index) =>
            index === rowIndex
              ? {
                  ...prev[rowIndex],
                  [columnId]: value,
                }
              : row
          )
        ),
    },
  });
  console.log(data);

  return (
    <div className="m-auto flex justify-center">
      <table className="table-auto">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="border-b text-gray-800 uppercase"
            >
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-4 pr-2 py-4 font-medium text-left"
                >
                  {header.column.columnDef.header}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 pt-[14px] pb-[18px]">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
