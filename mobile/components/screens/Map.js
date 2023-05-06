import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, TextInput } from 'react-native';
import MapView, { Callout, Marker } from "react-native-maps";
import {useState, useEffect} from 'react';
import * as Location from 'expo-location';
import axios from 'axios'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FilterScreen from './FilterScreen';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

export default function Map({ setMarkerFocus, setMarker }) {
  const [userLatitude, setUserLatitude] = useState(40.767807649503715);
  const [userLongitude, setUserLongitude] = useState(-73.96451422429842);

  const [nearbyBathrooms, setNearbyBathrooms] = useState([]);

  const [hasNearbyBathrooms, setHasNearbyBathrooms] = useState(false);
  const [hasUserCoords, setHasUserCoords] = useState(false);

  const [modalVisibility, setModalVisibility] = useState(false);
  const [filters, setFilters] = useState([])

  async function requestGeoPermissions() {
    Location.requestForegroundPermissionsAsync();
    setUserLatitude((await Location.getCurrentPositionAsync()).coords.latitude);
    setUserLongitude((await Location.getCurrentPositionAsync()).coords.longitude);
    setHasUserCoords(true);
  }
  function fetchNearbyBathrooms() {
    axios({
        method:'POST',
        url:'https://loose-temper-production.up.railway.app/bathroom/get-nearby', 
        data: {	lat: userLatitude, lng: userLongitude}, 
        headers:{'Content-Type': 'application/json'} })
    .then((res) => {
        setNearbyBathrooms(res.data);
        setHasNearbyBathrooms(true);
        return res.data
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
    console.log(filters)
    var filteredBathrooms = nearbyBathrooms;
     filters.forEach((filter) => {
       filteredBathrooms = nearbyBathrooms.filter(bathroom => {return (bathroom?.[filter]) == true} )
     })
     console.log(filteredBathrooms)
    setNearbyBathrooms(filteredBathrooms)
  },[filters])

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
          <GooglePlacesAutocomplete
            GooglePlacesDetailsQuery={{fields: "geometry"}}
            placeholder='Search'
            fetchDetails={true}
            onPress={(data, details) => {
              console.log(data);
              console.log(details)
              console.log(details.geometry.location.lat)
            }}
            query={{
              key: 'AIzaSyBZmtSMDn6vO3auJfJn4g1_VqLhnU8PgBo',
              language:'en'
            }}
            onFail={(e) => console.log(e,'fewwfe')}
          />
        <Ionicons name='filter-outline' size={28} color='black' onPress={() => {setModalVisibility(true)}}/>
        </View>

        <FilterScreen visible={modalVisibility} setVisible={setModalVisibility} filters={filters} setFilters={setFilters}/>
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
  fe:{
    position:'absolute',
    height:'100%',
    width:'100%'
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
    borderWidth:1,
    borderColor:'black',
    backgroundColor:'white',
    borderRadius:24,
    width:'50%',
    padding:8,
    marginRight:10
  },
  searchBar: {
    position:'absolute',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    top:0,
    width:'100%',
    height:100,
    backgroundColor:'white'
  }
});
