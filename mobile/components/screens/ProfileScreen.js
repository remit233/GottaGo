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

        <View  style={{
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#FFF',
            width: '90%',
            padding: 20,
            paddingBottom: 10,
            shadowOpacity: 80,
            shadowColor: '#743EA7',
            borderRadius: 10,
            elevation: 15,
            marginTop: 20,
            marginBottom: 40
        }}>
            <Text
            style={{frontSize: 100,fontWeight:'bold', padding:20}}> Recent Viewed Bathroom </Text>
        </View>

        <View style={{
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#FFF',
            width: '90%',
            padding: 20,
            paddingBottom: 10,
            shadowOpacity: 80,
            shadowColor: '#743EA7',
            borderRadius: 10,
            elevation: 15,
            marginTop: 20,
            marginBottom: 40
        }}>
            <Text
            style={{frontSize: 26, fontWeight:'bold', padding:20}}>Setting</Text>
        </View>

        <View style={{alignItems: 'center'}}>
            <Text
            style={{frontSize: 100, padding:20}}>Registered date: 04/04/2023</Text>
        </View>

    </ScrollView>
    );
}
