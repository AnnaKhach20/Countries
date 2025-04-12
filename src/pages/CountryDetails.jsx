import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryThunk } from '../Store/actions';
import CountryData from '../components/CountryData/CountryData'; 
import Map from '../Components/GoogleMap/Map';

export default function CountryDetails() {
  let { name } = useParams();
  const { country, loading, error } = useSelector((state) => state.country);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryThunk(name));
  }, []);

  if (loading) 
    return <div className="loading">Loading country data...</div>;
  
  if (error) 
    return <div className="error">Error: {error}</div>;
  
  if (!country) 
    return null;
// stex cheinq karox 1 if-i mej greinq?

  return (
    <main className='main'>
      <section className='sec'>
        <img src={country.flags?.png} className="flag-detail" />
        <CountryData country={country} />
      </section>
      <section className="map1">
        {country.coatOfArms?.png && (
          <img src={country.coatOfArms.png} className='map2' />
        )}
        <Map name={country.name?.common} />
      </section>
    </main>
  );
}