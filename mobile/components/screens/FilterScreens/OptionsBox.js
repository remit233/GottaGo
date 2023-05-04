import { View, StyleSheet, Text, Switch } from "react-native";
import { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function OptionsBox({icon='help-outline', text='PLACEHOLDER'}) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return(
        <View style={styles.option}>
            <Ionicons name={icon} size={28} color='black'/>
            <Text>{text}</Text>
            <Switch
                trackColor={{false:'grey', true:'purple'}}
                thumbColor={'white'}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    option:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#ededf1',
        width:'100%',
        height:65,
        paddingLeft:30,
        paddingRight:30
    }
})