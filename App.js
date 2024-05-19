import React from 'react';
import {StyleSheet, Text, View ,Pressable,TextInput, ScrollView} from 'react-native';
import IFM from './components/IFM';
// import Login from './components/Login';
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// const Tab = createMaterialTopTabNavigator();
const App =()=>{
  return(
    <IFM/>
  // <NavigationContainer>
  //   <Logo/>
  //   <Tab.Navigator>
  //     <Tab.Screen name='User' component={User}/>
  //     <Tab.Screen name='Adminestrator' component={Adminestrator}/>
  //   </Tab.Navigator>
  // </NavigationContainer>
  )
}

const User=()=>{
  return(
    <View>
            <TextInput
            style={styles.TextInput} 
            placeholder='First Name'>
            </TextInput>
            <TextInput
            style={styles.TextInput} 
            placeholder='Last Name'>
            </TextInput>
            <TextInput
            style={styles.TextInput} 
            placeholder='Email'>
            </TextInput>
            <TextInput
            style={styles.TextInput} 
            placeholder='Phone Number'>
            </TextInput>
            <TextInput
            style={styles.TextInput} 
            placeholder='Password'>
            </TextInput>
            <TextInput
            style={styles.TextInput} 
            placeholder='Confirm Password'>
            </TextInput>
            <Pressable>
                <Text style={styles.Pressable}>Sing Up</Text>
            </Pressable>
            <Text style={{textAlign:'center',fontSize:15,marginBottom:50}}>Already Have an account <Text style={{color:'#019863'}}>Login</Text> here</Text>
        </View>
  )
}
const styles= StyleSheet.create({
  TextInput:{
      fontSize:18,
      color:'black',
      borderWidth:2,
      borderColor:'black',
      margin:10,
      marginStart:30,
      marginEnd:30,
      padding:10,
      borderRadius:5
  },
  Pressable:{
      backgroundColor:'#019863',
      color:'white',
      height:50,
      margin:30,
      borderRadius:5,
      fontSize:25,
      textAlign:'center',
      paddingTop:10
      
  }
})

const Adminestrator=()=>{
  return(
    <ScrollView>
            <TextInput
            style={styles.TextInput} 
            placeholder='Organization Name'>
            </TextInput>
            <TextInput
            style={styles.TextInput} 
            placeholder='Registration Number'>
            </TextInput>
            <TextInput
            style={styles.TextInput} 
            placeholder='GST NUmber'>
            </TextInput>
            <TextInput
            style={styles.TextInput} 
            placeholder='Email'>
            </TextInput>
            <TextInput
            style={styles.TextInput} 
            placeholder='Phone Number'>
            </TextInput>
            <TextInput
            style={styles.TextInput} 
            placeholder='First Name'>
            </TextInput>
            <TextInput
            style={styles.TextInput} 
            placeholder='Last Name'>
            </TextInput>
            <TextInput
            style={styles.TextInput} 
            placeholder='Latitude'>
            </TextInput>
            <TextInput
            style={styles.TextInput} 
            placeholder='Longitude'>
            </TextInput>
            <TextInput
            style={styles.TextInput} 
            placeholder='Password'>
            </TextInput>
            <TextInput
            style={styles.TextInput} 
            placeholder='Confirm Password'>
            </TextInput>
            <Pressable>
                <Text style={styles.Pressable}>Sing Up</Text>
            </Pressable>
            <Text style={{textAlign:'center',fontSize:15,marginBottom:50}}>Already Have an account <Text style={{color:'#019863'}}>Login</Text> here</Text>
    </ScrollView>
  )
}

const Logo=()=>{
  return(
    <View>
      <Text style={{backgroundColor:'#019863',alignItems:'center',alignContent:'center',padding:30,marginTop:10,marginBottom:5,borderRadius:500,height:200,width:200,alignSelf:'center',fontSize:80,color:'white',paddingTop:45,textShadowOffset:{width:8,height:5},textDecorationColor:'black',textShadowRadius:3}}>IFM</Text>
    </View>
  )
}
export default App;