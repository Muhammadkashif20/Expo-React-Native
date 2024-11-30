import { router } from 'expo-router'
import React from 'react'
import { View,Text, TouchableOpacity } from 'react-native'

const welcomeScreen = () => {
  return (
    <View>
        <Text>Welcome To Our Home</Text>
        <TouchableOpacity onPress={()=>router.push('/login')}>
            Login
        </TouchableOpacity>
    </View>
  )
}

export default welcomeScreen
