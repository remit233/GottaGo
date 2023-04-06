import * as React from 'react'
import { StyleSheet, Modal, View, Text } from 'react-native';

export default function MessageModal() {
    return (
        <View style={styles.container}>
            <Modal
                animationType='slide'
                visible={true}
                >
                <Text>jwlkefw</Text>
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