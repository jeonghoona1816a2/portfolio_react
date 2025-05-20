// src/components/ProjectsTable/ProjectsTable.jsx
import React, { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from '@tanstack/react-table';

// ← 여기에 columns 정의를 꼭 넣어주세요.
const columns = [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: info => info.getValue(),
  },
  {
    accessorKey: 'title',
    header: '프로젝트명',
    cell: info => info.getValue(),
  },
  {
    accessorKey: 'description',
    header: '설명',
    cell: info => info.getValue(),
  },
  {
    accessorKey: 'skills',
    header: '기술 스택',
    cell: info => (info.getValue() || []).join(', '),
  },
  {
    accessorKey: 'image',
    header: '이미지',
    cell: info => {
      const imgs = info.getValue() || [];
      return imgs.length > 0 ? (
        <img
          src={imgs[0]}
          alt={info.row.original.title}
          style={{ width: 60, height: 'auto', borderRadius: 4 }}
        />
      ) : null;
    },
  },
];

export default function ProjectsTable({ projects }) {
  // useState도 잊지 말고 import, 선언해 주세요.
  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data: projects,
    columns,                  // 이제 columns가 정의되어 있으니 에러 없음
    state: { sorting },       // 제어형 정렬 상태
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          {table.getHeaderGroups().map(hg => (
            <tr key={hg.id}>
              {hg.headers.map(header => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  style={{
                    padding: 8,
                    textAlign: 'left',
                    cursor: header.column.getCanSort() ? 'pointer' : 'default',
                    borderBottom: '2px solid #ddd',
                    userSelect: 'none',
                  }}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                  {{
                    asc: ' 🔼',
                    desc: ' 🔽',
                  }[header.column.getIsSorted()] ?? null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} style={{ borderBottom: '1px solid #eee' }}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} style={{ padding: 8 }}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
