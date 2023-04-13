import * as React from 'react'
import { StyleSheet, Modal, View, Text, Button } from 'react-native';
import {useState, useEffect} from 'react';
export default function MessageModal() {
    const [visible, setVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Button title='ff' onPress={() => {setVisible(true)}}/>
            <Modal 
                animationType='slide'
                visible={visible}
                >
                <View style={styles.view}>
                    <Text style={styles.text}>Log In or Sign Up</Text>
                    <View style={styles.center}>
                        <Button style = {styles.button} title='jewfle' onPress={() => {setVisible(false)}}/>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF3FF',
    },
    center: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    view: {
        backgroundColor: '#FFF3FF',
        margin: 20,
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
    },
    text: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        textAlign: 'center'
    }
});