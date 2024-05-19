import React from "react";
import {StyleSheet, Text,TextInput,View,Button, Pressable} from 'react-native'

const Login =()=>{
    return(
        <View>
            <Text style={{backgroundColor:'#019863',alignItems:'center',alignContent:'center',padding:30,marginTop:100,marginBottom:5,borderRadius:500,height:200,width:200,alignSelf:'center',fontSize:80,color:'white',paddingTop:45,textShadowOffset:{width:8,height:5},textDecorationColor:'black',textShadowRadius:3}}>IFM</Text>

            <TextInput
            style={styles.TextInput} 
            placeholder='User Name'>
            </TextInput>
            <TextInput
            style={styles.TextInput} 
            placeholder='Password'>
            </TextInput>

            <Text style={{color:'#019863',padding:15,paddingStart:220,fontSize:15}}>Forget Password ?</Text>

            <Pressable>
                <Text style={styles.Pressable}>Login</Text>
            </Pressable>
            <Text style={{textAlign:'center',fontSize:15}}>If you don't Have an account <Text style={{color:'#019863'}}>regester</Text> here</Text>
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

export default Login;