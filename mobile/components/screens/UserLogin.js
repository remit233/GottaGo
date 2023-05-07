import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
// const {height} = Dimensions.get("window");

const UserLogin = () => {
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

            <View>
            <Text>Testing How Login Page is</Text>
            </View>
            
            <View style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                justifyContents: "space-between"
                
            }}>
            <View style = {{flexDirection: 'column'}}>
            <TouchableOpacity  style={styles.loginbutton}>
                <Text style = {{
                    color: "#FFFFFF"
                }}> Login </Text>
            </TouchableOpacity>
            </View>

            <View>
            <TouchableOpacity  style={styles.loginbutton}>
                <Text style = {{
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
        
        alignItems: 'center',
        backgroundColor: '#743EA7',
        padding: 10,
    }

});
export default UserLogin;
