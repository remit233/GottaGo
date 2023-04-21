import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, TextInput } from 'react-native';
import MapView, { Callout, Marker } from "react-native-maps";
import {useState, useEffect} from 'react';
import * as Location from 'expo-location';
import axios from 'axios'

export default function Map({ setMarkerFocus, setMarker }) {
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
          <Marker coordinate={{latitude:userLatitude, longitude:userLongitude}} onPress={() => {setMarkerFocus(true); setMarker({title:'You', author:':3'})}}>
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
                  <Marker coordinate={{latitude:bathroom.lat, longitude:bathroom.lng}} key={index} onPress={() => {setMarkerFocus(true); setMarker({title:bathroom.name, author:bathroom.address})}}>
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
        <View style={styles.searchBar}>
          <TextInput style={styles.input} placeholder='Search nearby...'/>
        </View>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  map: {
    position:'absolute',
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  text: {
    backgroundColor:'white'
  },
  input: {
    borderWidth:0.5,
    borderColor:'black',
    backgroundColor:'white',
    borderRadius:24,
    width:'50%',
    padding:8
  },
  searchBar: {
    position:'absolute',
    alignItems:'center',
    top:0,
    width:'100%',
    height:50,
    backgroundColor:'white'
  }
});
