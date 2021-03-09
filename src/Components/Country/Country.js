import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Country.css'


const Country = (props) => {
    const {name, capital} = props.country;
    const history = useHistory();
    const handleClick = (name) =>{
    history.push(`/country/${name}`)
}
    const design={   
    }
    return (
        <div className='size'>
            <div className='design'>
            <h1>Name: {name}</h1>
            <button><Link to={`/country/${name}`}>Show More</Link></button>
            <button onClick={() => handleClick(name)}>Details</button>

        </div>
        </div>
        
    );
};

export default Country;