import SignUpScreen from '../screens/SignUp/SingUpScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login/LoginScreen';
import Home from '../screens/Home/Home';
import * as React from 'react';
import DoorScreen from '../screens/Door/DoorScreen';
import { useStateValue } from '../StateProvider';
import BarScannerScreen from '../screens/BarScannerScreen/BarScannerScreen';



export default function Router() {

  const Stack = createNativeStackNavigator();

  const [{user}, dispatch] = useStateValue()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {user ? <>
            <Stack.Screen name="Sign Up" component={SignUpScreen} options={{headerShown: false}} />
            <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}} />
            <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
            <Stack.Screen name='Door config' component={DoorScreen} />
            <Stack.Screen name="Bar Scanner" component={BarScannerScreen}/>
        </> :
        <>
            <Stack.Screen name="Sign Up" component={SignUpScreen} options={{headerShown: false}} />
            <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}} />
        </>}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
