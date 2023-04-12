import * as React from 'react';
import { View, Text, ScrollView ,Image} from 'react-native';

export default function GameScreen({navigation}){
    return(
    <ScrollView>
        <View style={{ padding:10, width:'100%', backgroundColor: '#743EA7', height: 150, alignItems: 'center', justifyContent: 'center',}}>

        </View>

        <View style={{alignItems: 'center'}}>
            <Image source={require('./Images/profilepic.png')} style={{width:140, height:140,
        borderRadius:100, marginTop: -70}}/>
            <Text onPress = { () => alert('Profile!!')}
            style={{frontSize: 26,  fontWeight: 'bold', padding:10}}>STEVEN HERE</Text>
        </View>
        
    </ScrollView>
    );
}
