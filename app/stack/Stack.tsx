import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, List, WeatherDisplay} from '../Pages';

const Stack = createNativeStackNavigator();

const RootStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="List" component={List} />
    <Stack.Screen name="WeatherDisplay" component={WeatherDisplay} />
  </Stack.Navigator>
);

export default RootStack;
