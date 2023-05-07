import MainContainer from './components/MainContainer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BathroomContext } from './components/screens/context';
import { useState } from 'react';

export default function App() {
  const [bathroom, setBathroom] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <BathroomContext.Provider value={{bathroom, setBathroom}}>
        <MainContainer/>
      </BathroomContext.Provider>
    </GestureHandlerRootView>
  );
}
