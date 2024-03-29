import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import GameScreen from './screens/GameScreen';
import ProfileScreen from './screens/ProfileScreen';

import UserLogin from './screens/LoginScreens/UserLogin';
import Login from './screens/LoginScreens/Login';
import Register from './screens/LoginScreens/Register';
//Screen names
const homeName = "Home";
const chatName = "Chat";
const gameName = "Game";
const profileName = "Profile";
const userlogin = "UserLogin";
const login = "Login";
const register = "Register";

const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

function ProfileContainer(){
  return(
    <Stack.Navigator>
      <Stack.Screen name={userlogin} component={UserLogin}/>
      <Stack.Screen name={login} component={Login}/>
      <Stack.Screen name={register} component={UserLogin}/>

      </Stack.Navigator>
  );
}
function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === gameName) {
              iconName = focused ? 'game-controller' : 'game-controller-outline';

            } else if (rn === chatName) {
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
            } else if (rn === profileName) {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          "tabBarActiveTintColor": "#743EA7",
          "tabBarInactiveTintColor": "black",
          "tabBarLabelStyle": {
            "fontSize": 10,
            "paddingBottom": 10
          },
          "tabBarStyle": {
            "display":"flex",
            "height":60,
            "paddingTop":8
          },
          headerTitleAlign:'center'
        })}
      >

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={gameName} component={GameScreen} />
        <Tab.Screen name={chatName} component={ChatScreen} />
        <Tab.Screen name={profileName} component={ProfileScreen}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default MainContainer;