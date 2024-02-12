import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Citylist.css';
const CityList = () => {
    const [cities, setCities] = useState([]);
    const [sortDirection, setSortDirection] = useState("asc");

    const fetchCities = () =>{
        axios.get(`http://localhost:3001/api/city?sort=${sortDirection}`)
        .then(response => {
            // Update the state with the fetched city list
            setCities(response.data.result);
          })
          .catch(error => {
            console.error('Error fetching cities:', error);
          });
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/api/city?sort=${sortDirection}`)
            .then(response => {
                setCities(response.data.result);
            })
            .catch(error => {
                console.error('Error Fetching cities:', error)
                
            });
            fetchCities();
    },[sortDirection]);

    return (
        <div className='city-list-container'>
            <h1>City List 
            <button className='primary' onClick={() => setSortDirection(sortDirection === "asc"? "desc":"asc")}>{sortDirection === "asc"? "↑":"↓"}</button></h1>
            <ol className='city-list'>
                {cities.map(city => (
                    <li key={city.id} className='city-list-item'>{city.name}</li>
                ))}
            </ol>
        </div>
    );
};

export default CityList;
