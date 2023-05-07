import { View, StyleSheet, Text } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';


function Card({type}) {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.wrapper}>
                <Ionicons name={type} size={32} color="black"/>
                <Text>{type}</Text>
            </View>
        </View>
    )
}


export default function InfoBox() {
    return (
        <View style={styles.mainContainer}>
            <Card type={'timer-outline'}/>
            <Card type={'people-outline'}/>
            <Card type={'star-outline'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop:8,
        paddingBottom:10,
        borderRadius:8
    },
    cardContainer: {
        width:125,
        height:150,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'purple',
        borderRadius:8
    },
    wrapper: {
        justifyContent:'center',
        alignItems:'center',
        padding: 5,
        backgroundColor:'yellow'
    }
})