import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Text, View ,StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      <MaterialIcons name="account-circle" size={24} color="black" />
      <Text style={styles.text}>easypaisa</Text>
      <MaterialIcons name="search" size={24} color="black" />
      {/* <MaterialIcons name="notifications" size={24} color="black" /> */}
      </View>
    </View>
  );
}
const styles=StyleSheet.create({
 container:{
  flex:1,
 },
 text:{
  textAlign:'center',
  fontWeight:"600",
  color:'white',
  fontSize:20,
  letterSpacing:1,

 },
 header:{
  backgroundColor:'#249A54',
  height:50,
  justifyContent:'space-between',
  flexDirection:'row',
  paddingVertical:14,
  paddingHorizontal:14,
 }

})
