import React from 'react';
import { useDispatch } from 'react-redux';
import { getSearchActionCreator } from '../../Store/actions';
import './SearchBar.css'
const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(getSearchActionCreator(e.target.value));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search country"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;