import * as React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground,Text,TextInput,StyleSheet, View } from 'react-native';
export default function Login({ navigation }){
    
    return (
        <SafeAreaView>
        <View>
        <ImageBackground
            style={{
                height: 250,
            }} 
            resizeMode="contain"
            source={require('./Images/GottaGologo1.png')}
            />
</View>

        <View style={{alignItems: "center"}}>
        <Text style={styles.title}>Login Here</Text>
        </View>

        <View style={{marginVertical: 33}}>
        <TextInput placeholder="Email"
        style={styles.textbox}/>
        </View>

        <View >
        <TextInput placeholder="Password"
        style={styles.textbox}/>
        </View>    
        
        <View style={{marginVertical: 33}}>
        <TouchableOpacity
        style={styles.button}>
        <Text style={{
            fontWeight: 'bold'}}>Login</Text>
        </TouchableOpacity>
        </View>  
    </SafeAreaView>);

};

const styles = StyleSheet.create({
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: "#6060e4"
    },
    textbox:{
        padding:22,
        backgroundColor:"#C2AFD5",
        fontSize: 15,
        color: "#8c8c8c",
        borderRadius: 11,
        marginHorizontal: 20
    },
    button:{
        padding:22,
        backgroundColor:"#6060e4",
        fontSize: 15,
        color: "#000000",
        fontWeight: 'bold',
        borderRadius: 11,
        marginHorizontal: 20
    }

});