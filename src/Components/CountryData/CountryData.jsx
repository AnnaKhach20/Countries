import React from 'react'
import Border from '../Border/Border'
import './country-d.css'

export default function CountryData({ country }) {
    return (
        <div className='country-data'>
            <div>
                <h1 className='country-name'>{country.name?.common}</h1>
            </div>
            <div className='info1'>
                <div className='card'>
                    <h3><span>Native Name : </span>{country?.name?.common}</h3>
                    <h3><span>Region : </span>{country?.region}</h3>
                    <h3><span>Capital : </span>{country?.capital}</h3>
                </div>
                <div className='card'>
                    <h3><span>Population : </span>{country?.population}</h3>
                    <h3><span>Subregion : </span>{country?.subregion}</h3>
                    <h3><span>Area : </span>{country?.area}km<sup>2</sup></h3>
                </div>
            </div>
            <div className='border'>
                {country?.borders?.map((border, i) => <Border key={i} border={border} />)}
            </div>
        </div>
    )
}
