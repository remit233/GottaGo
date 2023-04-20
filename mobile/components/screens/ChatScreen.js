//Detail screen
import * as React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import MessageModal from './ChatScreens/MessageModal'
import PostBox from './ChatScreens/PostBox';
export default function ChatScreen({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <Text style={styles.text}>CurrentBathroom</Text>
                </View>
                <PostBox title={'Is the bathroom clean'} author={'Joey :P'}/>
                <PostBox title={'Make font size smaller as text exceeds max heigght'} author={'Lewwis :3'}/>
            </View>
            <MessageModal/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#f2f2f2'
    },
    wrapper: {
        flex:1,
        height:'96%',
        width:'98%',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    header: {
        height:50,
        width:'100%',
        alignItems:'flex-start',
        justifyContent:'center'
    },
    text: {
        fontSize:16,
        textDecorationLine:'underline'
    }
})