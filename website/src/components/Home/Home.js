import './Home.css'
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

export default function Home() {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: ""
    });

    if(!isLoaded) return <div>loading...</div>;

    return (
        <div className="home section">
            <h1 className='home-header1'>let's go weewee :3</h1>
            <h2 className='home-header2'>search nearby:</h2>
            
            <form className='search-bar'>
                <input type="text" name="search" placeholder='where da bathroom at...'/>
            </form>
        
           <GoogleMap zoom={15} center={{lat:40.768497649503715, lng:-73.96421422429842}} mapContainerClassName="map-container">
                <Marker position={{lat:40.768497649503715, lng:-73.96421422429842}}/>
                <Marker position={{lat:41.768497649503715, lng:-73.96421422429842}}/>
           </GoogleMap>
        </div>
    )
}