import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { StateProvider, useStateValue } from './StateProvider';
import reducer, { initialState } from './reducer';
import Router from './routes/Router';



export default function App() {

  const Stack = createNativeStackNavigator();


  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router /> 
    </StateProvider>
  );
}

