import React from 'react'
import { Stack } from 'expo-router'
const layout = () => {
  return (
    <Stack screenOptions={{headerShown:false}} initialRouteName='index'>
    <Stack.Screen name='index'/>
    <Stack.Screen name='login'/>
  </Stack>
  )
}

export default layout

