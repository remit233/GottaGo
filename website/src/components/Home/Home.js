import './Home.css'
import Markers from '../Markers/Markers'
import { GoogleMap, useLoadScript } from "@react-google-maps/api"
import { useState } from 'react';

export default function Home() {
    const [userLatitude, setUserLatitude] = useState(40.768497649503715);
    const [userLongitude, setUserLongitude] = useState(-73.96421422429842);

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: ""
    });

    if(!isLoaded) return <div>loading...</div>;

    navigator.geolocation.getCurrentPosition((pos) => {
        setUserLatitude(pos.coords.latitude);
        setUserLongitude(pos.coords.longitude);
    })

    return (
        <div className="home section">
            <h1 className='home-header1'>let's go weewee :3</h1>
            <h2 className='home-header2'>search nearby:</h2>
            
            <form className='search-bar'>
                <input type="text" name="search" placeholder='where da bathroom at...'/>
            </form>
        
           <GoogleMap zoom={15} center={{lat:userLatitude, lng:userLongitude}} mapContainerClassName="map-container">
              <Markers/>
           </GoogleMap>
        </div>
    )
}