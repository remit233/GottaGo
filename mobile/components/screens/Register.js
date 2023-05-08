import * as React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text,TextInput,StyleSheet, View } from 'react-native';
export default function Login(){
    return (
        <SafeAreaView>
        <View style={{alignItems: "center"}}>
        <Text style={styles.title}>Enter Your informations below</Text>
        </View>

        <View style={{marginVertical: 8}}>
        <TextInput placeholder="Last Name"
        style={styles.textbox}/>
        </View>

        <View style={{marginVertical: 8}}>
        <TextInput placeholder="First Name"
        style={styles.textbox}/>
        </View>   

        <View style={{marginVertical: 8}}>
        <TextInput placeholder="Email"
        style={styles.textbox}/>
        </View>    

        <View style={{marginVertical: 8}}>
        <TextInput placeholder="Password"
        style={styles.textbox}/>
        </View>    

        <View style={{marginVertical: 8}}>
        <TextInput placeholder="Reenter your password"
        style={styles.textbox}/>
        </View>    

        <View style={{marginVertical: 16}}>
        <TouchableOpacity placeholder="Password"
        style={styles.button}>
        <Text style={{
            fontWeight: 'bold'}}>Sign Up</Text>
        </TouchableOpacity>
        </View>  
    </SafeAreaView>);

};

const styles = StyleSheet.create({
    title:{
        fontSize: 22,
        fontWeight: 'bold',
        color: "#6060e4"
    },
    textbox:{
        padding:10,
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