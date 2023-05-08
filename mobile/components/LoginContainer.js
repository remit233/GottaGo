import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './screens/Login';
import Register from './screens/Register';
import UserLogin from './screens/UserLogin';

const Drawer = createDrawerNavigator();
function MyDrawer(){
    return(
        <NavigationContainer>
        <Drawer.Navigator initialRouteName='UserLogin'>
        <Drawer.Screen name="UserLogin" component={UserLogin}/>
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Register" component={Register} />
    </Drawer.Navigator>
    </NavigationContainer>
        
    );
};

export default MyDrawer;