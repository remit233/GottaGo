import * as React from 'react';
import { View, Text } from 'react-native';

export default function GameScreen({navigation}){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text 
            onPress = { () => alert('Game SCREEN!!')}
            style={{frontSize: 26, fontWeight: 'bold'}}>Game-VR GAME WILL BE HERE</Text>
        </View>
    );
}