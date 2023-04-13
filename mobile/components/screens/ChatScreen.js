//Detail screen
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MessageModal from './ChatScreens/MessageModal'
import PostBox from './ChatScreens/PostBox';
export default function ChatScreen({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <PostBox title={'Is the bathroom at so and so clean'} author={'Ana P'}/>
                <PostBox title={'Make font size smaller as text exceeds max heigght'} author={'Steven :3'}/>
            </View>
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
        height:'96%',
        width:'94%',
        justifyContent:'flex-start',
        alignItems:'center'
    }
})