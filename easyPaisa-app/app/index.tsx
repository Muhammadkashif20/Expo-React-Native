import { ThemedText } from '@/components/ThemedText'
import { router } from 'expo-router'
import React from 'react'
import { View,Text, TouchableOpacity } from 'react-native'

const welcomeScreen = () => {
  return (
    <View>
      {/* <Text style={{fontSize:32,textAlign:'center',fontWeight:'bold'}}>Heading</Text>
      <Text style={{fontSize:16,textAlign:'center',fontWeight:'bold'}}>Heading</Text> */}
      <ThemedText type='title'>Heading With Components</ThemedText>
    </View>
  )
}

export default welcomeScreen
