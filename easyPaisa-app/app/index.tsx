import { ThemeButton } from '@/components/ThemedButton'
import { ThemedText } from '@/components/ThemedText'
// import { router } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import React from 'react'
import { View,Text, TouchableOpacity, StyleSheet } from 'react-native'

const welcomeScreen = () => {
  return (
    <View style={styles.container}>
        <ThemedText  type='title' align='center' style={{marginBottom:10}}>Welcome To Our App</ThemedText>
      <ThemeButton onPress={()=>router.push('/changeTheme')} my={10} bgColor='#000' txt='Change Theme App' icon={<AntDesign name="weibo" size={20} color="white" />} style={{elevation:1}}/>
      <ThemeButton onPress={()=>alert('login To Google')} my={10} txtColor='#000' bgColor='#fff' txt='login To Google' icon={<AntDesign name="google" size={20} color="black" />} style={{elevation:2}}/>
      <ThemeButton my={10}  txt='Go To easypaisa HomePage' style={{elevation:1}}/>
      <ThemeButton my={10} bgColor='#000' txt='Continue with Github' icon={<AntDesign name="github" size={20} color="white" />} style={{elevation:1}}/>
</View>
  )
}
export default welcomeScreen
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
})