import React, { useState  } from 'react';
import axios from 'axios';
import './DeleteCity.css';
const CityDelete = () => {
    const [cityId , setCityId] = useState('');

    const handleDelete = async() => {
    axios.delete(`http://localhost:3001/api/city/${cityId}`)
    .then(response => {
        console.log(response.data);
        if (response.data.result === 500) {
            alert(response.data.exception);
        }
        console.log('City Deleted Successfuly', response.data.result);
        window.location.reload();

    })
    .catch(error => {
        console.error('Error Deleting the city', error);
    })
    }


return (
    <div className='delete-city-container'>
        <h1>Delete A City</h1>
        
            <input
            className='delete-city-input'
            type='text'
            placeholder='City ID'
            value={ cityId }
            onChange={(e) => setCityId(e.target.value)}/>
        
        <button className='delete-city-button' onClick={handleDelete}>Delete City</button>
    </div>
    );
};

export default CityDelete;