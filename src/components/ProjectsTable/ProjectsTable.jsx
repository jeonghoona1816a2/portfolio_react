// src/components/ProjectsTable/ProjectsTable.jsx
//npm install @tanstack/react-table 설치 필요

import React, { useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from '@tanstack/react-table';

// 컬럼 정의
const columns = [
  {
    accessorKey: 'companyName',
    header: '회사명',
    cell: info => info.getValue(),
  },
  {
    accessorKey: 'summary',
    header: '소개',
    cell: info => info.getValue(),
  },
  {
    accessorKey: 'role',
    header: '담당직무',
    cell: info => info.getValue(),
  },
  {
    accessorKey: 'startDate',
    header: '시작일',
    cell: info => info.getValue(),
  },
  {
    accessorKey: 'endDate',
    header: '종료일',
    cell: info => info.getValue(),
  },
  {
    accessorKey: 'position',
    header: '직책',
    cell: info => info.getValue(),
  },
];

export default function ProjectsTable({ projects }) {
  // 테이블 인스턴스 생성
  const table = useReactTable({
    data: projects,
    columns,
    state: {
      sorting: projects.sorting,      // 초기 정렬 상태를 여기에 넣어도 되고
    },
    onSortingChange: sorting => {
      table.setSorting(sorting);
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    // 필요시 페이징, 필터링 훅도 추가 가능
  });

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  style={{
                    padding: '8px',
                    textAlign: 'left',
                    cursor: header.column.getCanSort() ? 'pointer' : 'default',
                    userSelect: 'none',
                    borderBottom: '2px solid #ddd',
                  }}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
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
                <td key={cell.id} style={{ padding: '8px' }}>
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
