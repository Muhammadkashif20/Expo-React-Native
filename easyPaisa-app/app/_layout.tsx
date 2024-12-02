import { Stack } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import { store } from '../store/store'
import { Provider } from 'react-redux'
const _layout = () => {
  return (
    <View style={{flex:1}}>
      <Provider store={store}>
      <Stack screenOptions={{headerShown:false}} initialRouteName='index'>
      <Stack.Screen name='index'></Stack.Screen>
      </Stack>
  </Provider>,
    </View>
  )
}

export default _layout
