"use client";

import useSpreadsheetStore from '@/store/SpreadsheetStore';
import React from 'react';

const Cell = ({ row, col }) => {
  const { getCellData, updateCell } = useSpreadsheetStore((state) => ({
    getCellData: state.getCellData,
    updateCell: state.updateCell,
  }));

  const [value, setValue] = React.useState(getCellData(row, col) || '');

  const handleChange = (e) => {
    setValue(e.target.value);
    updateCell(row, col, e.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      className="border p-2"
      style={{ width: '100px', height: '30px' }}
    />
  );
};

export default Cell;
