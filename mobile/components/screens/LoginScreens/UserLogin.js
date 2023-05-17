import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
// const {height} = Dimensions.get("window");
import Login from "./Login";
import Register from "../Register";

const UserLogin = ({navigation}) => {
    return(
        <SafeAreaView>
            <View>
                <ImageBackground
                    style={{
                        height: 400,
                    }} 
                    resizeMode="contain"
                    source={require('./Images/GottaGologo1.png')}
                    />
            
            </View>

            
            
            <View style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                justifyContents: "space-between"
                
            }}>
            <View style = {{flexDirection: 'column'}}>
            <TouchableOpacity  style={styles.loginbutton}
            >
                <Text style = {{fontWeight: 'bold',
                    color: "#FFFFFF"
                }}> Login </Text>
            </TouchableOpacity>
            </View>

            <View>
            <TouchableOpacity  style={styles.loginbutton}>
                <Text style = {{fontWeight: 'bold',
                    color: "#FFFFFF"

                }}> Register </Text>
            </TouchableOpacity>
            </View>
            </View>
        </SafeAreaView>
    );
};



const styles = StyleSheet.create({
    loginbutton:{
        marginVertical: 8,
        padding:22,
        backgroundColor:"#6060e4",
        fontSize: 15,
        color: "#000000",
        fontWeight: 'bold',
        borderRadius: 11,
        marginHorizontal: 20,
        

    }

});

export default UserLogin;


