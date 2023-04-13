//Home screen
import * as React from 'react';
import { View } from 'react-native';
import Map from './Map';
import PostBox from './ChatScreens/PostBox';
export default function HomeScreen({navigation}){
    const [userLongitude, setUserLongitude] = React.useState();
    const [userLatitude, setUserLatitude] = React.useState();

    const [markerFocus, setMarkerFocus] = React.useState(false);
    const [marker, setMarker] = React.useState();

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Map setMarker={setMarkerFocus}/>
            {markerFocus ? <PostBox title={'Hi :3'} author={'joey'}/>:null}
        </View>
    );
}
