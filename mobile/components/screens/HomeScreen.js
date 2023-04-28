//Home screen
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import {GestureDetector} from 'react-native-gesture-handler'

import Map from './Map';
import PostBox from './ChatScreens/PostBox';
import BottomTab from './BottomTab';
import { BathroomContext } from './context';


export default function HomeScreen({navigation}){
    const [userLongitude, setUserLongitude] = React.useState();
    const [userLatitude, setUserLatitude] = React.useState();

    const [markerFocus, setMarkerFocus] = React.useState(false);
    const [marker, setMarker] = React.useState({title:'null', author:'null'});

    const {bathroom, setBathroom} = React.useContext(BathroomContext);

    React.useEffect(() => {
        setBathroom(marker)
    },[marker])
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Map setMarkerFocus={setMarkerFocus} setMarker={setMarker}/>
            {markerFocus?<BottomTab title={marker.title} author={marker.author} type='defaultBathroom'/>:null}
        </View>
    );
}

const styles = StyleSheet.create({
    bottomSheetContainer: {
        position:'absolute',
        height:'100%',
        width:'100%',
        backgroundColor:'white',
        top:100,
        borderRadius:15
    }
})