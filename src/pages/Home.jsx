import React from 'react';
import CountryList from '../components/CountryList/CountryList';
import FilterRegion from '../Components/FilterRegion/FilterRegion';
import SearchBar from '../Components/SearchBar/SearchBar';

export default function Home() {
  return (
    <div className="home-container">
      <div className="controls">
        <SearchBar />
        <FilterRegion />
      </div>
      <CountryList />
    </div>
  );
}