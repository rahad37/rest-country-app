import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './CountryDetail.css';

const CountryDetail = () => {
    const { name } = useParams();
    const [country, setCountry] = useState([]);
    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(res => res.json())
        .then(data => setCountry(data[0]));
    },[name])
    const {flag, capital, region, area, population} = country;
    return (
        <div className='nice'>
            <img src={flag} alt=""/>
            <h1>Country: {country.name}</h1>
            <h2>Capital: {capital}</h2>
            <h2>Region: {region}</h2>
            <h3>Area: {area} kilometers</h3>
            <h3>Population: {population}</h3>
            <button><Link to={`/home`}>Go Back</Link></button>
        </div>
    );
};

export default CountryDetail;