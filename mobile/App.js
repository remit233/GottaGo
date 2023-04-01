import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, { Callout, Marker } from "react-native-maps";

export default function App() {
  

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        initialRegion={{
          latitude:40.76799008313369,
          longitude:-73.96456128222825,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04
        }}>
          <Marker coordinate={{latitude:37,
          longitude:-122,}}>
            <Callout>
              <Text>Hewwo :3</Text>
            </Callout>
          </Marker>
        </MapView>
      <Text>Hewwo :3</Text>
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
