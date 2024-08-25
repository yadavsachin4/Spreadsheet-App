"use client";

import React, { useEffect, useState } from 'react';
import Row from './Row';
import useSpreadsheetStore from '@/store/SpreadsheetStore';

const Spreadsheet = ({ rows, columns }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 10;
  const { data, initializeData } = useSpreadsheetStore((state) => ({
    data: state.data,
    initializeData: state.initializeData,
  }));

  useEffect(() => {
    initializeData(); // Initialize data when component mounts
  }, [initializeData]);

  const startIndex = currentPage * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const dataKeys = Object.keys(data);
  const paginatedDataKeys = dataKeys.slice(startIndex, endIndex);

  return (
    <div>
      <div className="space-y-2">
        {paginatedDataKeys.length > 0 ? (
          paginatedDataKeys.map((key) => {
            const [row, col] = key.split('-').map(Number);
            return <Row key={key} rowIndex={row} columns={columns} />;
          })
        ) : (
          <p>No data available</p>
        )}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={endIndex >= dataKeys.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Spreadsheet;
