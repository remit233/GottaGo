import { React } from "react";
import { View, StyleSheet, Text } from "react-native";

const FormHeader=({leftHeading,rightHeading,subHeading})=>{
    return (
    <>
    <View style={styles.container}>
    <Text style={styles.heading}>{leftHeading}</Text>
    <Text style={styles.heading}>{rightHeading}</Text>
    </View>
    <Text style={styles.subheading}>{subHeading} </Text>
    </>
    )
}

const styles= StyleSheet.create({
    container:{
        flexDirection: "row", 
        justifyContent: "center", 
        alignContent:"center"
},
    heading: {
        fontSize:30, color:'#655DBB',fontWeight:'bold',textAlign:"center"
    },
    subheading:{
        fontSize:19, color:'#655DBB',textAlign:"center"
    }
}
)

export default FormHeader;