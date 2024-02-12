import React, { useState } from "react";
import axios from "axios";
import './UpdateCity.css';

const UpdateCityForm = () => {
    const [cityName, setCityName] = useState('');
    const [cityId, setCityId] = useState('');


    const handleUpdateCity = async() => {
        const parsedCityId = parseInt(cityId)
        if (isNaN(parsedCityId)) {
            console.error('Invalid City Id ', cityId);
            return;
        }
        axios.put(`http://localhost:3001/api/city/${parsedCityId}`, {name: cityName})
        .then(response => {
            console.log(response.data);
            if(response.data.result === 500) {
                alert(response.data.exception);
            }
            console.log('City updated successfully: ', response.data.result);
            window.location.reload();
        })
        .catch(error => {
            console.error('Error Updating City', error);
        });
    };
    return (
        <div className="update-city-container">
            <h1>Update City</h1>
            <input
            className="update-city-input" 
            type="text"
            placeholder="Enter City ID to update"
            value={cityId}
            onChange={(e) => {
                setCityId(e.target.value);
            }}
            />
            <br/>
            <input
            className="update-city-input"
            type="text"
            placeholder="Enter new name"
            value={cityName}
            onChange={(e) => {
                setCityName(e.target.value);
            }}
            />
            <button className= "update-city-button" onClick={handleUpdateCity}>Update City</button>
        </div>
    );
}

export default UpdateCityForm;