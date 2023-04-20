import * as React from 'react'
import { StyleSheet, Modal, View, Text, Button } from 'react-native';
import {useState, useEffect} from 'react';
export default function MessageModal() {
    const [visible, setVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Button title='SHOWMODAL' onPress={() => {setVisible(true)}}/>
            <Modal animationType='slide' visible={visible}>
                <View style={styles.modalContainer}>
                    <View style={styles.view}>
                        <Text style={styles.text}>Log In or Sign Up</Text>
                        <View style={styles.center}>
                            <Button style = {styles.button} title='BACK' onPress={() => {setVisible(false)}}/>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
import * as React from 'react'
import { StyleSheet, Modal, View, Text } from 'react-native';

export default function MessageModal() {
    const [visible, setVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Button title='SHOWMODAL' onPress={() => {setVisible(true)}}/>
            <Modal animationType='slide' visible={visible}>
                <View style={styles.modalContainer}>
                    <View style={styles.view}>
                        <Text style={styles.text}>Log In or Sign Up</Text>
                        <View style={styles.center}>
                            <Button style = {styles.button} title='BACK' onPress={() => {setVisible(false)}}/>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    modalContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    container: {
        width:'50%',
        height:'50%',
        backgroundColor: '#FFFFFF',
    },
    center: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    view: {
        width:'100%',
        height:'30%',
        justifyContent:'center',
        alignItems:'center'
    },
    button: {
        flex:1
    },
    text: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        textAlign: 'center',
        fontSize:32
    }
});