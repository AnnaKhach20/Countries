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
  }, [name, dispatch]);

  if (loading) return <div className="loading">Loading country data...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!country) return null;

  return (
    <main className='main'>
      <section className='sec'>
        <img src={country.flags?.png} alt={`Flag of ${country.name?.common}`} className="flag-detail" />
        <CountryData country={country} />
      </section>
      <section className="map1">
        {country.coatOfArms?.png && (
          <img src={country.coatOfArms.png} alt={`Coat of arms of ${country.name?.common}`} className='map2' />
        )}
        <Map name={country.name?.common} />
      </section>
    </main>
  );
}