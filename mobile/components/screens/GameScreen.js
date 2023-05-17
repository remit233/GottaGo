import * as React from 'react';
import { View, Text } from 'react-native';
import UserLogin from './LoginScreens/UserLogin';
import App from '../LoginContainer';
import Login from './LoginScreens/Login';
import Register from './LoginScreens/Register';
export default function GameScreen({navigation}){
    return(
        <View>
        <UserLogin/>
            </View>
    );
}
