import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, { Callout, Marker } from "react-native-maps";
import {useState, useEffect} from 'react';
import * as Location from 'expo-location';
import axios from 'axios'

export default function Map() {
  const [nearbyBathrooms, setNearbyBathrooms] = useState([])

  const [userLatitude, setUserLatitude] = useState(40.767807649503715);
  const [userLongitude, setUserLongitude] = useState(-73.96451422429842);

  
  useEffect(() => {
    async function requestGeoPermissions() {
      await Location.requestForegroundPermissionsAsync()
      setUserLatitude((await Location.getCurrentPositionAsync()).coords.latitude)
      setUserLongitude((await Location.getCurrentPositionAsync()).coords.longitude)
      fetchBathrooms();
    }
    function fetchBathrooms() {
      axios({
          method:'POST',
          url:'http://10.0.2.2:3001/bathroom/get-nearby', 
          data: {	lat: userLatitude, 
                  lng: userLongitude}, 
          headers:{'Content-Type': 'application/json'} })
      .then((res) => {
          setNearbyBathrooms(res.data)
      })
    }
    requestGeoPermissions();
  }, [])

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        initialRegion={{
          latitude:userLatitude,
          longitude:userLongitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04
        }}>
        <Marker coordinate={{latitude:userLatitude, longitude:userLongitude}}>
          <Callout>
            <Text>U R Here :3</Text>
          </Callout>
        </Marker>
        {nearbyBathrooms.map((bathroom)=> {
          return(<Marker coordinate={{latitude:bathroom.lat, longitude:bathroom.lng}}>
            <Callout>
              <Text>Hewwowoo</Text>
            </Callout>
          </Marker>)
        })}
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
