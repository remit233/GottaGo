import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity,Text,TextInput,StyleSheet, View ,ImageBackground,ScrollView} from 'react-native';
export default function Login(){
    return (
        <SafeAreaView>
        <ScrollView>
        <View>
                <ImageBackground
                    style={{
                        height: 250,
                    }} 
                    resizeMode="contain"
                    source={require('../Images/GottaGologo.png')}
                    />
            
            </View>
        
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
        </ScrollView>
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