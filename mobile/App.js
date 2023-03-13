import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import FormHeader from './components/FormHeader';


export default function App() {
  return (
    <View style={{flex: 1,paddingTop: 150}}>
      <View stlye={{height: 100}}>
     <FormHeader leftHeading='Gotta' rightHeading='Go' subHeading='Welcome'/>
      </View>
      <View style={{flexDirection:'row', padding:20}}>
      <TouchableWithoutFeedback>
        <View style={{height:45,width:'50%',backgroundColor:'#37306B',justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:16,color:'white'}}>Login</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View style={{height:45,width:'50%',backgroundColor:'#66347F',justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:16,color:'white'}}>Sign up</Text>
        </View>
      </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
