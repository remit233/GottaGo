import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


export default function PostBox({title, author}) {
    return (
        <View style={[styles.container, styles.column]}>
            <Image style={styles.img} source={require('../../../assets/defaultuser2.png')}/>
            <View style={styles.row}>
                <Text style={styles.title}>{title}</Text>
                <Text>{author}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height:'auto',
        maxHeight:100,
        width:'100%',
        backgroundColor:'#b9b9e9',
        paddingRight:15,
        paddingLeft:15,
        paddingTop: 15,
        paddingBottom:15,
        borderRadius:8,
        marginBottom:3
    },
    img: {
        width:70,
        height:70,
        borderRadius:35
    },
    column: {
        flexDirection:'row',
        alignItems:'center'
    },
    row: {
        flex:1,
        paddingLeft:25
    },
    title: {
        fontSize:32
    }
})