import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

// import { createStackNavigator } from "@react-navigation/stack";

// const {height} = Dimensions.get("window");
// import Login from "./Login";
// import Register from "../Register";


const UserLogin = ({ navigation }) => {
  const handleLoginPress = () => {
    // Navigate to the desired screen when the login button is clicked
    navigation.navigate('Login');
  };

  const handleRegisterPress = () => {
    // Navigate to the desired screen when the register button is clicked
    navigation.navigate('Register');
  };

  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          style={{
            height: 400,
          }}
          resizeMode="contain"
          source={require('../Images/GottaGologo.png')}
        />
      </View>

      <View style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        justifyContents: "space-between"
      }}>
        <View style={{ flexDirection: 'column' }}>
          <TouchableOpacity style={styles.loginbutton} onPress={handleLoginPress}>
            <Text style={{
              fontWeight: 'bold',
              color: "#FFFFFF"
            }}> Fuck </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.loginbutton} onPress={handleRegisterPress}>
            <Text style={{
              fontWeight: 'bold',
              color: "#FFFFFF"
            }}> Register </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginbutton: {
    marginVertical: 8,
    padding: 22,
    backgroundColor: "#6060e4",
    fontSize: 15,
    color: "#000000",
    fontWeight: 'bold',
    borderRadius: 11,
    marginHorizontal: 20,
  }
});

export default UserLogin;
