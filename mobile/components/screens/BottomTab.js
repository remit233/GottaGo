
import { StyleSheet, Text, View } from "react-native"
import { Gesture, GestureDetector } from "react-native-gesture-handler"
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated"
import PostBox from './ChatScreens/PostBox'
import InfoBox from "./InfoBox"

export default function BottomTab({title, author, type}) {
    const translateY = useSharedValue(0)
    const context = useSharedValue({y:0})
    const gesture = Gesture.Pan()
    .onStart((e) => {
        context.value = {y:translateY.value}
    }).onUpdate((e) => {
        translateY.value=(e.translationY + context.value.y)    })

    const bottomSheetStyle = useAnimatedStyle(() => {
        return { transform: [{translateY:((translateY.value > 77.2602767944336 && translateY.value< 344.2675795555115? translateY.value:
            (translateY.value > 77.2602767944336 ? 344.2675795555115:77.2602767944336)))}]}
    })
    return (
        <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.container, bottomSheetStyle]}>
                <PostBox title={title} author={author} imag={type}/>
                <InfoBox/>
            </Animated.View>
        </GestureDetector>
    )
}

const styles= StyleSheet.create({
    container:{
        width:'100%',
        top:'50%',
        position:'absolute',
        backgroundColor:'white',
        borderColor:'black',
        borderWidth:0.5,
        paddingTop:10,
        borderRadius:8
    }
})