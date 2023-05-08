// Home.js
import './Home.css';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import { useState, useEffect } from 'react';

export default function Home() {
  const [userLatitude, setUserLatitude] = useState(40.768497649503715);
  const [userLongitude, setUserLongitude] = useState(-73.96421422429842);
  const [bathrooms, setBathrooms] = useState([]);
  const [address, setAddress] = useState('');

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyACMRwb-sr4h4K3RPcb48mCe58UrBn64t8',
  });

  const fetchBathrooms = async (latitude, longitude) => {
    const apiUrl = `http://localhost:3001/bathrooms?lat=${latitude}&lng=${longitude}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    setBathrooms(data);
    console.log(data);
  };
  

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setUserLatitude(pos.coords.latitude);
      setUserLongitude(pos.coords.longitude);
    });
  }, []);

  useEffect(() => {
    if (isLoaded) {
      fetchBathrooms(userLatitude, userLongitude);
    }
  }, [isLoaded, userLatitude, userLongitude]);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=AIzaSyACMRwb-sr4h4K3RPcb48mCe58UrBn64t8`;
    const geocodeResponse = await fetch(geocodeUrl);
    const geocodeData = await geocodeResponse.json();
    const location = geocodeData.results[0].geometry.location;
    setUserLatitude(location.lat);
    setUserLongitude(location.lng);
    fetchBathrooms(location.lat, location.lng); // Fetch bathrooms for the searched location
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className='home'>
      <header className='header'>
        <h1>Find Nearby Public Restrooms</h1>
      </header>

      <section className='search-section'>
        <h2>Search by address:</h2>
        <form className='search-form' onSubmit={handleSubmit}>
          <input
            type='text'
            name='search'
            value={address}
            onChange={handleAddressChange}
            placeholder='Enter an address or location'
          />
          <button type='submit'>Search</button>
        </form>
      </section>

      <section className='map-section'>
        <GoogleMap
          zoom={15}
          center={{ lat: userLatitude, lng: userLongitude }}
          mapContainerClassName='map-container'
        >
       {bathrooms.map((bathroom, index) => (
  <MarkerF
    key={bathroom.place_id || index}
    position={{ lat: bathroom.geometry.location.lat, lng: bathroom.geometry.location.lng }}
    title={bathroom.name}
  />
))}

        </GoogleMap>
      </section>
    </div>
  );
}
