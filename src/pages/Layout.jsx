import React from 'react';
import { Outlet } from 'react-router-dom';
import SearchBar from '../components/SearchBar/SearchBar';

const Layout = () => {
  return (
    <div>
      <header>
        <h1>Countries App</h1>
        <SearchBar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;