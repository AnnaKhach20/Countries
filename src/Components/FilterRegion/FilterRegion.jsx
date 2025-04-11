import React from 'react';
import { useDispatch } from 'react-redux';
import { getRegionThunk } from '../../Store/actions';

const FilterRegion = () => {
  const dispatch = useDispatch();
  const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const handleChange = (e) => {
    dispatch(getRegionThunk(e.target.value));
  };

  return (
    <select onChange={handleChange} className="region-filter">
      {regions.map(region => (
        <option key={region} value={region}>{region}</option>
      ))}
    </select>
  );
};

export default FilterRegion;