import * as React from 'react'
import { StyleSheet, Modal, View, Text, Button } from 'react-native';
import {useState, useEffect} from 'react';
export default function MessageModal() {
    const [visible, setVisible] = useState(true);

    return (
        <View style={styles.container}>
            <Button title='ff' onPress={() => {setVisible(true)}}/>
            <Modal
                animationType='slide'
                visible={visible}
                >
                <Text>jwlkefw</Text>
                <Button title='jewfle' onPress={() => {setVisible(false)}}/>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});