import { Stack } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

const _layout = () => {
  return (
    <View style={{flex:1}}>
      <Stack screenOptions={{headerShown:false}} initialRouteName='index'>
      <Stack.Screen name='index'></Stack.Screen>
      </Stack>
      {/* <Stack.Screen name='index'></Stack.Screen> */}
    </View>
  )
}

export default _layout
