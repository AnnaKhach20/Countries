import React from 'react'
import { NavLink } from 'react-router-dom'
import './country.css'

export default function Country({ flag, name, population, region, capital, cca3 }) {
  return (
    <section className='country'>
      <NavLink to={`/country/${cca3}`} className="flag-link">
        <div className="flag-img-container">
          <img src={flag} className="flag-img" />
        </div>
      </NavLink>
      <div className='card-i'>
        <h1 className='name'>{name}</h1>
        <p><span>Population: </span>{population}</p>
        <p><span>Region: </span>{region}</p>
        <p><span>Capital: </span>{capital}</p>
      </div>
    </section>
  );
}