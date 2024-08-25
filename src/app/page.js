import React from 'react';
import Toolbar from './components/Toolbar';
import Spreadsheet from './components/SpreadSheet';

const Home = () => {
  return (
    <div className="p-6">
      <Toolbar/>
      <Spreadsheet rows={100} columns={10} />
    </div>
  );
};

export default Home;
