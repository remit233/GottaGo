//Home screen
import * as React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Map from './Map';
import PostBox from './ChatScreens/PostBox';
export default function HomeScreen({navigation}){
    const [userLongitude, setUserLongitude] = React.useState();
    const [userLatitude, setUserLatitude] = React.useState();

    const [markerFocus, setMarkerFocus] = React.useState(false);
    const [marker, setMarker] = React.useState({title:'null', author:'null'});

    const [scrollContainerHeight, setScrollContainerHeight] = React.useState(100)

    const styles = StyleSheet.create({
        scrollContainer: {
            position:'absolute',
            flex:1,
            width:'100%',
            height: scrollContainerHeight,
            bottom:0
        }
    })

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Map setMarkerFocus={setMarkerFocus} setMarker={setMarker}/>
            <View style={styles.scrollContainer}>
                <ScrollView onScroll={(e) => {setScrollContainerHeight(scrollContainerHeight+10)}}>
                    {markerFocus ? <PostBox title={marker.title} author={marker.author}/>:null}
                    <PostBox/>
                </ScrollView>
            </View>
        </View>
    );
}
