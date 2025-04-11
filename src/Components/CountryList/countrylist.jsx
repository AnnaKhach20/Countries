import React from 'react';
import Country from '../Country/Country'; 
import { useSelector } from 'react-redux';

const CountryList = () => {
  const { countries, loading, error } = useSelector((state) => state.countries);
  const { text } = useSelector((state) => state.search);

  if (loading) return <div className="loading">Loading countries...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <div className="conltainer-2">
      {filteredCountries.map((country) => (
        <Country
          key={country.cca3}
          flag={country.flags.png}
          name={country.name.common}
          population={country.population.toLocaleString()}
          region={country.region}
          capital={country.capital?.[0] || 'N/A'}
          cca3={country.cca3}
        />
      ))}
    </div>
  );
};

export default CountryList;