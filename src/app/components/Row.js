import React from 'react';
import Cell from './Cell';

const Row = ({ rowIndex, columns }) => {
  return (
    <div className="flex">
      {Array.from({ length: columns }).map((_, colIndex) => (
        <Cell key={colIndex} row={rowIndex} col={colIndex} />
      ))}
    </div>
  );
};

export default Row;
