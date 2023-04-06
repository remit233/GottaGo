//Detail screen
import * as React from 'react';
import { View, Text } from 'react-native';

import MessageModal from './ChatScreens/MessageModal'
export default function ChatScreen({navigation}){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text 
            onPress = { () => alert('Chat SCREEN!!')}
            style={{frontSize: 26, fontWeight: 'bold'}}>Chat</Text>
            <MessageModal/>
        </View>
    );
}
