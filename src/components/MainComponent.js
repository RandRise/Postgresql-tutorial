import React, { useState } from 'react';
import AddCityForm from './AddCityForm/AddCityForm';
import CityList from './Citylist/Citylist';  // Correct the import statement
import CityDelete from './DeleteCity/DeleteCity';
import UpdateCityForm from './UpdateCityForm/UpdateCity';
const MainComponent = () => {
  const [cityAdded, setCityAdded] = useState(false);
  const [selectedCityId, setSelectedCityId] = useState(null);

  const handleCityAdded = () => {
    // Set the flag to trigger a re-fetch of the city list
    setCityAdded(true);

    setSelectedCityId(null);
  };

  const handleCitySelected = (cityId) => {
    setSelectedCityId(cityId)
  }
    

  return (
    <div>
      <AddCityForm onCityAdded={ handleCityAdded } />
      <CityList key={ cityAdded } />
      <UpdateCityForm cityId= { selectedCityId } onUpdateCity={ handleCityAdded } />
      <CityDelete/>
      
    </div>
  );
};

export default MainComponent;
