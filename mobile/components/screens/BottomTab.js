import { StyleSheet, Text, View } from "react-native"
import { Gesture, GestureDetector } from "react-native-gesture-handler"
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated"
export default function BottomTab() {
    const translateY = useSharedValue(0)
    const context = useSharedValue({y:0})
    const gesture = Gesture.Pan()
    .onStart((e) => {
        context.value = {y:translateY.value}
    }).onUpdate((e) => {
        translateY.value=e.translationY + context.value.y
    })

    const bottomSheetStyle = useAnimatedStyle(() => {
        return { transform: [{translateY:translateY.value}]}
    })
    return (
        <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.container, bottomSheetStyle]}>
                <Text>fewfw</Text>
            </Animated.View>
        </GestureDetector>
    )
}

const styles= StyleSheet.create({
    container:{
        height:'50%',
        width:'100%',
        top:'50%',
        position:'absolute',
        backgroundColor:'white'
    }
})