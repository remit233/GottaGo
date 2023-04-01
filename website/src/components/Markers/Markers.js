import {MarkerF} from "@react-google-maps/api"
import axios from 'axios'
import { useState, useEffect } from "react"

export default function Markers() {
    const [nearbyBathrooms, setNearbyBathrooms] = useState([])

    const [userLatitude, setUserLatitude] = useState(40.768497649503715);
    const [userLongitude, setUserLongitude] = useState(-73.96421422429842);

    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            setUserLatitude(pos.coords.latitude);
            setUserLongitude(pos.coords.longitude);
        })
        function fetchBathrooms() {
            axios({
                method:'POST',
                url:'http://localhost:3001/bathroom/get-nearby', 
                
                data: {	lat: userLatitude, 
                        lng: userLongitude}, 
                headers:{'Content-Type': 'application/json'} })
            .then((res) => {
                setNearbyBathrooms(res.data)
            })
        }
        fetchBathrooms();
    },[])

    return (
        <>
        <MarkerF position={{lat:userLatitude, lng:userLongitude}} label={{ text: 'U R Here :3' }}/>
        {
            nearbyBathrooms.map(bathroom => {
                return(<MarkerF position={{lat:bathroom.lat, lng:bathroom.lng}}/>)
            })
        }
        </>
    )
}