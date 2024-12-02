import { ThemeButton } from '@/components/ThemedButton'
import { ThemedText } from '@/components/ThemedText'
import { useSelector, useDispatch } from 'react-redux'
import React from 'react'
import { View } from 'react-native'
import { RootState } from '@/store/store'
const ChangeTheme = () => {
    const theme = useSelector((state: RootState) => state.theme.theme)
    const dispatch = useDispatch()
    console.log('theme=>',theme);
    
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ThemedText type='title'>Change Theme Application</ThemedText>
        <ThemeButton onPress={()=>dispatch()} my={10} txt='Change Theme Color'/>
    </View>
  )
}

export default ChangeTheme
