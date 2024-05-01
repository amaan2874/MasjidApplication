import React from 'react';
import { Button, Text, View } from 'react-native';
import Logo from './Logo';

const App = () =>{
  return(
    <View style={{padding:30}}>
      <Logo/>

      <Text style={{color:'#019863',fontSize:18,textAlign:'center',marginTop:50,marginBottom:70,textShadowOffset:{width:1,height:1},textDecorationColor:'black',textShadowRadius:2}}>Innovation with Integrity,Roooted in Islam</Text>

      <Start />
      
    </View>
  );
};

const Start = () => {
  const clic =(val) =>{
    console.warn(val)
}
  return(
    <View>
      <Button onPress={()=>clic(408*100)} title='Start'color={'#019863'}/>
    </View>
  )
}

export default App;