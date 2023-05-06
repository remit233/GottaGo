import { StyleSheet, View, Button, Modal, Text, Switch } from 'react-native';
import { useState } from 'react'

import OptionsBox from './FilterScreens/OptionsBox';

export default function FilterScreen({visible, setVisible, filters, setFilters}) {
    
    return(
        <View style={styles.container}>
            <Modal animationType='slide' visible={visible}>
                <View style={styles.modalContainer}>
                    <View style={styles.center}>
                        <Button style = {styles.button} title='X' onPress={() => {setVisible(false)}}/>
                    </View>
                    <View style={styles.view}>
                        <Text style={styles.text}>Sort and Filter</Text>
                        <OptionsBox icon='trail-sign-outline' text='Distance' setFilters={setFilters}/>
                        <OptionsBox icon='star-outline' text='Rating'setFilters={setFilters}/>
                        <OptionsBox icon='timer-outline' text='Average Wait Time'setFilters={setFilters}/>
                        <OptionsBox icon='person-outline' text='Accessibility'setFilters={setFilters}/>
                        <OptionsBox icon='happy-outline' text='Baby Changing Station'setFilters={setFilters}/>
                        <OptionsBox icon='male-female-outline' text='gender_neutral'setFilters={setFilters}/>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modalContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    container: {
        position:'absolute',
        flex:1
    },
    center: {
        position:'absolute',
        top:25,
        right:25,
        width:'100%',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    view: {
        width:'100%',
        height:'90%',
        justifyContent:'center',
        alignItems:'center'
    },
    text: {
        backgroundColor: '#FFFFFF',
        textAlign: 'center',
        fontSize:32,
        paddingBottom: 30
    }
});