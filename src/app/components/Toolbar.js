// components/Toolbar.js
"use client";

import useSpreadsheetStore from '@/store/SpreadsheetStore';
import React, { useState } from 'react';

const Toolbar = () => {
  const undo = useSpreadsheetStore((state) => state.undo);
  const redo = useSpreadsheetStore((state) => state.redo);
  const filterData = useSpreadsheetStore((state) => state.filterData);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    filterData(searchTerm);
  };

  return (
    <div className="flex justify-between p-4 border-b">
      <button onClick={undo} className="bg-gray-500 text-white px-4 py-2 rounded">
        Undo
      </button>
      <button onClick={redo} className="bg-gray-500 text-white px-4 py-2 rounded">
        Redo
      </button>
      <div className="flex space-x-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          className="border p-2"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
