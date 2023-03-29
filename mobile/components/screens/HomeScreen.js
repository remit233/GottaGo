//Home screen
import * as React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen({navigation}){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text 
            onPress = { () => alert('HOME SCREEN!!')}
            style={{frontSize: 26, fontWeight: 'bold'}}>HOME-Map should be here later</Text>
        </View>
    );
}
