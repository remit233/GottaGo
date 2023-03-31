import {MarkerF} from "@react-google-maps/api"
import axios from 'axios'
import { useState, useEffect } from "react"

export default function Markers() {
    const [nearbyBathrooms, setNearbyBathrooms] = useState([])

    useEffect(() => {
        function fetchBathrooms() {
            axios({
                method:'POST',
                url:'http://localhost:3001/bathroom/get-nearby', 
                
                data: {	lat:40.768497649503715, 
                        lng:-73.96421422429842}, 
                headers:{'Content-Type': 'application/json'} })
            .then((res) => {
                setNearbyBathrooms(res.data)
            })
        }
        fetchBathrooms();
    },[])
    return (
        <>{
            nearbyBathrooms.map(bathroom => {
                return(<MarkerF position={{lat:bathroom.lat, lng:bathroom.lng}}/>)
            })
        }
        </>
    )
}