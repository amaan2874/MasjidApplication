import React from 'react';
import { Text, View } from 'react-native';

const App = () =>{
  return(
    <View style={{padding:30}}>
      <Text style={{backgroundColor:'#019863',alignItems:'center',alignContent:'center',padding:30,marginTop:180,borderRadius:500,height:200,width:200,alignSelf:'center',fontSize:80,color:'white',paddingTop:45,textShadowOffset:{width:8,height:5},textDecorationColor:'black',textShadowRadius:3}}>IFM</Text>

      {/* <UserData /> */}
      
    </View>
  );
};

const UserData = () => {
  return(
    <View>
      <Text style={{fontSize:30,textAlign:'center',color:'red',backgroundColor:'green',marginTop:30}}>Name : amaan</Text>
    </View>
  )
}

export default App;