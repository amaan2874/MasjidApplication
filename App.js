import React from 'react';
import {StyleSheet, Text, View ,Pressable,TextInput, ScrollView} from 'react-native';
import IFM from './components/IFM';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import User from './components/User';
import Administrator from './components/Administrator';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Stack = createNativeStackNavigator();
// const Tab = createMaterialTopTabNavigator();
const App =()=>{
  return(
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='IFM' component={IFM}/>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='User' component={User}/>
      <Stack.Screen name='Administrator' component={Administrator}/>
    </Stack.Navigator>
 </NavigationContainer>
  )
}

export default App;