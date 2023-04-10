//Detail screen
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MessageModal from './ChatScreens/MessageModal'
import PostBox from './ChatScreens/PostBox';
export default function ChatScreen({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.view}> 
                <Text>kjwfe</Text>
            </View>
            <PostBox/>
            <PostBox/>
            <PostBox/>
            <PostBox/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'#FFF3FF'},
    view: { flex:1, backgroundColor: '#FFFFFF' }
})