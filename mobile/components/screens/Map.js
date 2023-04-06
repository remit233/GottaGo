import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, { Callout, Marker } from "react-native-maps";
import {useState, useEffect} from 'react';
import * as Location from 'expo-location';
import axios from 'axios'

export default function Map() {
  const [userLatitude, setUserLatitude] = useState(40.767807649503715);
  const [userLongitude, setUserLongitude] = useState(-73.96451422429842);

  const [nearbyBathrooms, setNearbyBathrooms] = useState([]);

  const [hasNearbyBathrooms, setHasNearbyBathrooms] = useState(false);
  const [hasUserCoords, setHasUserCoords] = useState(false);

  async function requestGeoPermissions() {
    Location.requestForegroundPermissionsAsync();
    setUserLatitude((await Location.getCurrentPositionAsync()).coords.latitude);
    setUserLongitude((await Location.getCurrentPositionAsync()).coords.longitude);
    setHasUserCoords(true);
  }
  function fetchNearbyBathrooms() {
    axios({
        method:'POST',
        url:'http://10.0.2.2:3001/bathroom/get-nearby', 
        data: {	lat: userLatitude, lng: userLongitude}, 
        headers:{'Content-Type': 'application/json'} })
    .then((res) => {
        setNearbyBathrooms(res.data);
        setHasNearbyBathrooms(true);
    })
  }
    function CreateUserMarker() {
        return (
            <Marker coordinate={{latitude:userLatitude, longitude:userLongitude}}>
                <Callout>
                    <Text>{userLatitude}, {userLongitude}</Text>
                </Callout>
            </Marker>
        )
    }
    function CreateNearbyBathroomMarkers() {
        return (
            nearbyBathrooms.map((bathroom, index)=> {
                return (
                    <Marker coordinate={{latitude:bathroom.lat, longitude:bathroom.lng}} key={index}>
                        <Callout>
                            <Text>{bathroom.lat}, {bathroom.lng}</Text>
                        </Callout>
                    </Marker>
                )
            })
        )
    }

  useEffect(() => {
    if(hasUserCoords) { fetchNearbyBathrooms() }
  },[hasUserCoords])

  useEffect(() => {
    requestGeoPermissions();
  }, [])
  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        region={{
          latitude:userLatitude,
          longitude:userLongitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}>
        {hasUserCoords ? <CreateUserMarker/> : null}
        {hasNearbyBathrooms ? <CreateNearbyBathroomMarkers/> : null}
        
        </MapView>
        <Text>Hewwoooo :3</Text>
        <Text>Welcome to Bathroom Tracker</Text>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  map: {
    position:'absolute',
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});
