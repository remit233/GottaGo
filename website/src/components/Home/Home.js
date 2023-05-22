import { useCallback, useEffect, useRef, useState } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import './Home.css';
import Filter from '../Filter/Filter.js';
// import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom';



const libraries = ['places'];

export default function Home() {
  const [userLatitude, setUserLatitude] = useState(40.768497649503715);
  const [userLongitude, setUserLongitude] = useState(-73.96421422429842);
  const [bathrooms, setBathrooms] = useState([]);
  const [address, setAddress] = useState('');
  const [autocomplete, setAutocomplete] = useState(null);
  const [mapCenter, setMapCenter] = useState({ lat: userLatitude, lng: userLongitude });
  const searchInputRef = useRef(null);
  const mapRef = useRef();
  const [bathroomCount, setBathroomCount] = useState(0);
  const [currentLocation, setCurrentLocation] = useState('');
  const [selectedBathroom, setSelectedBathroom] = useState(null);
  const [loading] = useState(false);
  const [ratings, setRatings] = useState({});
  const [review, setReview] = useState('');

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyACMRwb-sr4h4K3RPcb48mCe58UrBn64t8',
    libraries
  });

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const onMapDragEnd = useCallback(() => {
    if (mapRef.current) {
      const lat = mapRef.current.getCenter().lat();
      const lng = mapRef.current.getCenter().lng();
      setMapCenter({ lat, lng });
    }
  }, []);

  const fetchBathrooms = async (latitude, longitude) => {
    const apiUrl = `http://localhost:3001/bathrooms?lat=${latitude}&lng=${longitude}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Update the bathrooms data with ratings
    const bathroomsWithInfo = data.map((bathroom) => ({
      ...bathroom,
      rating: ratings[bathroom.place_id] || 0
    }));

    setBathrooms(bathroomsWithInfo);
    setBathroomCount(data.length);

    const location = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyACMRwb-sr4h4K3RPcb48mCe58UrBn64t8`);
    const locationData = await location.json();
    setCurrentLocation(locationData.results[0].formatted_address);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setUserLatitude(pos.coords.latitude);
      setUserLongitude(pos.coords.longitude);
      setMapCenter({ lat: pos.coords.latitude, lng: pos.coords.longitude });
    });
  }, []);

  useEffect(() => {
    if (isLoaded) {
      fetchBathrooms(userLatitude, userLongitude);
    }
  }, [isLoaded, userLatitude, userLongitude]);

  useEffect(() => {
    if (isLoaded) {
      setAutocomplete(new window.google.maps.places.Autocomplete(searchInputRef.current));
    }
  }, [isLoaded]);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (autocomplete && autocomplete.getPlace()) {
      const place = autocomplete.getPlace();
      const newMapCenter = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
      setMapCenter(newMapCenter);
      fetchBathrooms(newMapCenter.lat, newMapCenter.lng);
    }
  };

  const handleSearchNearby = () => {
    fetchBathrooms(mapCenter.lat, mapCenter.lng);
  };

  const handleRatingChange = (placeId, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [placeId]: rating,
    }));
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleReviewSubmit = () => {
    //implement the logic to submit the review and rating
   
    console.log('Review:', review);
    console.log('Rating:', ratings[selectedBathroom.place_id]);
  };

  if (loadError) return <div>Error loading maps</div>;
  if (loading || !isLoaded) return <div>Loading...</div>;

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
              ref={searchInputRef}
              value={address}
              onChange={handleAddressChange}
              placeholder='Enter an address or location'
            />
            <button type='submit'>Search Near Address</button>
          </form>
          <button type='button' onClick={handleSearchNearby}>Search Bathrooms Near Map Center</button>
          <div className="filter-container">
            <Filter />
          </div>
          <div className="important-info"></div>
          <p>Searching Near:</p>
          <p>{currentLocation} :</p>
          <p className="address">{bathroomCount} bathrooms found </p>
          <div />
          <div className="suggest-new-button-container">
            
            <button className="suggest-new-button">
            <Link to="/suggest-bathroom" className="suggest-new-button">
  Suggest New Bathroom
</Link>
            </button>
          </div>
        </section>

        <section className='map-section'>
          <p>Drag the map to change the center location, then click 'Search Bathrooms Near Map Center' to see nearby bathrooms based on the new location or search by address using the search bar.</p>
          <GoogleMap
            zoom={15}
            center={mapCenter}
            onLoad={onMapLoad}
            onDragEnd={onMapDragEnd}
            mapContainerClassName='map-container'
            options={{ gestureHandling: "greedy" }}
          >
            {bathrooms.map((bathroom, index) => (
              <Marker
                key={bathroom.place_id || index}
                position={{ lat: bathroom.geometry.location.lat, lng: bathroom.geometry.location.lng }}
                title={bathroom.name}
                onClick={() => {
                  setSelectedBathroom(bathroom);
                }}
              />
            ))}

            {selectedBathroom && (
              <InfoWindow
                position={{
                  lat: selectedBathroom.geometry.location.lat,
                  lng: selectedBathroom.geometry.location.lng
                }}
                onCloseClick={() => {
                  setSelectedBathroom(null);
                }}
              >
                <div className="info-window">
                  <h2>{selectedBathroom.name}</h2>
                  <p>{selectedBathroom.vicinity || selectedBathroom.formatted_address}</p>
                  <div className="rating-container">
                    <label>Rating:</label>
                    
                  </div>
                  <div className="review-container">
                    <label>Review:</label>
                    <textarea
                      value={review}
                      onChange={handleReviewChange}
                      placeholder="Leave a review..."
                      className="review-textarea"
                    />
                  </div>
                  <div className="buttons-container">
                    <button className="suggest-tags-button" onClick={() => window.open('https://example.com/suggest-tags')}>
                      Suggest Tags
                    </button>
                    <button className="more-info-button" onClick={() => window.open('https://example.com/give-more-info')}>
                      Help Give More Info
                    </button>
                    <button className="submit-button" onClick={handleReviewSubmit}>
                      Submit
                    </button>
                  </div>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </section>
      
    </div>
  );
}
