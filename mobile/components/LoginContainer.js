import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator, DrawerNavigator } from '@react-navigation/drawer';
import {Text} from 'react-native';
// import Login from './screens/Login';
// import Register from './screens/Register';
// import UserLogin from './screens/UserLogin';
function Login(){
  return(
    <View>
    <Text>Login</Text>
    </View>
  );
}

function Register(){
  return(
    <View>
    <Text>Register</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();
function MyDrawer(){
    return(
        <NavigationContainer>
        <Drawer.Navigator>
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Register" component={Register} />
    </Drawer.Navigator>
    </NavigationContainer>
        
    );
};

export default function App(){
  return <NavigationContainer>
  <DrawerNavigator/>
  </NavigationContainer>
}