//Home screen
import * as React from 'react';
import { View } from 'react-native';
import Map from './Map';
export default function HomeScreen({navigation}){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Map/>
        </View>
    );
}
