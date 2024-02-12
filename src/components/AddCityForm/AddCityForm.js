import React, { useState } from 'react';
import axios from 'axios';
import './AddCityForm.css';



const AddCityForm = () => {
  const [cityName, setCityName] = useState([]);


  const handleAddCity = () => {
    // Make a POST request to add a city
    axios.post('http://localhost:3001/api/city', { name: cityName })
      .then(response => {
        console.log(response.data);
        if (response.data.result === 500) {
            alert(response.data.exception);
        }
        console.log('City added successfully:', response.data.result);
        window.location.reload();
      })
      .catch(error => {
        console.error('Error adding city:', error);
      });
  };

  return (
    <div className='add-city-container'>
      <h1>Add City</h1>
      <input 
        className='add-city-input'
        type="text"
        placeholder="City Name"
        value={cityName}
        onChange={(e) => {
          setCityName(e.target.value);
        }}
      />
      <button className='add-city-button' onClick={handleAddCity}>Add A City</button>
    </div>
  );
};


export default AddCityForm;
