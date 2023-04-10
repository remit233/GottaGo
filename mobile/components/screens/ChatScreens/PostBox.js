import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


export default function PostBox() {
    return (
        <View style={[styles.container, styles.column]}>
            <Image style={styles.img} source={require('../../../assets/defaultuser.png')}/>
            <View style={styles.row}>
                <Text>TITLE</Text>
                <Text>AUTHOR</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height:70,
        width:'100%',
        backgroundColor:'orange',
        paddingRight:25,
        paddingLeft:25,
        paddingTop: 10,
        paddingBottom:10
    },
    img: {
        width:50,
        height:50
    },
    column: {
        flexDirection:'row',
        alignItems:'center'
    },
    row: {
        flex:1,
        paddingLeft:25
    }
})