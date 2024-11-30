
import { View, Text,TouchableOpacity} from 'react-native';
import React from 'react'
import { router } from 'expo-router';
const login = () => {
  return (
    <View style={{backgroundColor:'#002F2F' ,flex:1,justifyContent:'center',alignItems:'center',paddingTop:13 }}>
    <Text style={{color:"white" , fontSize:30 ,fontWeight:'bold' , letterSpacing:1 }}>You Are Login</Text>
    <TouchableOpacity onPress={()=>router.push('/bykea')} style={{backgroundColor:'#FF5722' , padding:10,borderRadius:10,marginTop:20,width:160 }}><Text style={{color:'white',textAlign:'center',fontWeight:'bold'}}>Go To Home</Text></TouchableOpacity>
  </View> 
  )
}

export default login
