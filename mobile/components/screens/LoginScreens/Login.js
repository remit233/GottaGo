import * as React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground,Text,TextInput,StyleSheet, View } from 'react-native';
import { onChange } from 'react-native-reanimated';
class Login extends React.Component{
    state = {
        email: "",
        password: "",
    };
    onChange = (email) => (text) => this.setState({[email]: text});

    render() {
        const { email, password } = this.state;
        const { navigation, loginhandler } = this.props;

        return (
            <SafeAreaView>
            <View>
            <ImageBackground
                style={{
                    height: 250,
                }} 
                resizeMode="contain"
                source={require('../Images/GottaGologo.png')}
                />
    </View>
    
            <View style={{alignItems: "center"}}>
            <Text style={styles.title}>Login Here</Text>
            </View>
    
            <View style={{marginVertical: 33}}>
            <TextInput 
            placeholder="Email"
            onChange={this.onChange("email")}
            value = {email}
            style={styles.textbox}/>
            </View>
    
            <View >
            <TextInput 
            placeholder="Password"
            onChange={this.onChange("Password")}
            secureTextEntry={true}
            value={password}
            style={styles.textbox}/>
            </View>    
            
            <View style={{marginVertical: 33}}>
            <TouchableOpacity
            style={styles.button}
            title="Login" onPress={() => loginhandler(this.state)}
            >
            <Text style={{
                fontWeight: 'bold'}}>Login</Text>
            </TouchableOpacity>

            <View style={{marginVertical: 33}}>
            <TouchableOpacity
            style={styles.button}
            title="Register" onPress={() => navigation.navigate("Register")}
            >
            <Text style={{
                fontWeight: 'bold'}}>Register</Text>
            </TouchableOpacity>
            </View>
            </View>  
        </SafeAreaView>
        );
    }

    

}

const styles = StyleSheet.create({
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: "#6060e4"
    },
    textbox:{
        padding:22,
        backgroundColor:"#C2AFD5",
        fontSize: 15,
        color: "#8c8c8c",
        borderRadius: 11,
        marginHorizontal: 20
    },
    button:{
        padding:22,
        backgroundColor:"#6060e4",
        fontSize: 15,
        color: "#000000",
        fontWeight: 'bold',
        borderRadius: 11,
        marginHorizontal: 20
    }

});
export default Login;