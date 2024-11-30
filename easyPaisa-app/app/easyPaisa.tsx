import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// Prevent the splash screen from auto-hiding before asset loading is complete.
// const Height_Screen=Dimensions.get('screen').height
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
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
    <SafeAreaView style={styles.container} >
      {/* Header */}
      <View style={styles.header}>
        <MaterialIcons
          name="notifications-none"
          style={styles.icon}
          size={24}
          color="white"
        />
        <Text style={styles.text}>easypaisa</Text>
        <MaterialIcons
          name="search"
          style={styles.icon}
          size={24}
          color="white"
        />
      </View>
      {/* hero Section*/}
      <View style={styles.hero}>
        <View style={styles.heroInside}>
          <View>
          <Image
            source={{
              uri: "data:image/jpeg;base64,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",
            }}
            style={styles.heroImg}
            />
            <Text style={{fontSize:12,marginHorizontal:10}}>Available Balance</Text>
            <Text style={{fontSize:19,fontWeight:"bold",color:'black',marginHorizontal:10,marginVertical:4}}>Rs. 30,000.00</Text>
            <Text style={{fontSize:11,color:'black',marginTop:2,marginHorizontal:10}}>Tap To Hide Balance</Text>
      </View>
            <View style={styles.rewards}>
          <View style={styles.heroRewards}>
            <MaterialIcons
              name="stars"
              size={20}
              color="orange"
              />
            <Text style={styles.heroRewardsText}>My Rewards</Text>
              </View>
              <View style={styles.mainBtn}>
            <TouchableOpacity style={styles.outlineBtn}><Text style={{textAlign:'center',fontSize:13}} >Upgrade Account</Text></TouchableOpacity>
            <TouchableOpacity style={styles.bgBtn}><Text style={{color:'#fff',textAlign:'center'}}>Add Cash</Text></TouchableOpacity>
              </View> 
              </View>
          </View>
        </View>
        {/* Cards */}
        <View style={styles.cards}>
            <View style={styles.designCard}>
            <MaterialIcons name="send" size={24} color="green" />
            <Text style={{fontSize:12}}>
              Send Money
            </Text>
            </View>
            <View style={styles.designCard}>
            <MaterialIcons name="payments" size={24} color="green" />
            <Text style={{fontSize:12}}>
              Bill Payments
            </Text>
            </View>
            <View style={styles.designCard}>
            <MaterialIcons name="mobile-screen-share" size={24} color="green" />
            <Text style={{fontSize:12}}>
              Mobile Packages
            </Text>
            </View>
        </View>
        <View>
        <Text style={{fontSize:12}}>
              More with easypaisa
            </Text>
            <View>

            <View style={{flexDirection:'row',gap:10,marginHorizontal:8,paddingHorizontal:8,borderRadius:10,height:300,backgroundColor:'#F1F1F1',justifyContent:'space-between'}}>
              <View>
              <MaterialIcons name="install-mobile" size={24} color="black" />
              <Text style={{fontSize:12}}>
              EasyLoad
            </Text>
              </View>
              <View>
              <MaterialIcons name="money" size={24} color="black" />
              <Text style={{fontSize:12}}>
              Easycash Loan
            </Text>
              </View>
                 <View>
              <MaterialIcons name="savings" size={24} color="black" />
              <Text style={{fontSize:12}}>
              Saving Pockets
            </Text>
              </View>
              <View>
              <MaterialIcons name="insert-invitation" size={24} color="black" />
              <Text style={{fontSize:12}}>
              Invite & Earn
            </Text>
              </View>
            </View>
            <View style={{flexDirection:'row',gap:10,marginHorizontal:8,paddingHorizontal:8,borderRadius:10,height:300,backgroundColor:'#F1F1F1',justifyContent:'space-between'}}>
              <View>
              <MaterialIcons name="install-mobile" size={24} color="black" />
              <Text style={{fontSize:12}}>
              EasyLoad
            </Text>
              </View>
              <View>
              <MaterialIcons name="money" size={24} color="black" />
              <Text style={{fontSize:12}}>
              Easycash Loan
            </Text>
              </View>
                 <View>
              <MaterialIcons name="savings" size={24} color="black" />
              <Text style={{fontSize:12}}>
              Saving Pockets
            </Text>
              </View>
              <View>
              <MaterialIcons name="insert-invitation" size={24} color="black" />
              <Text style={{fontSize:12}}>
              Invite & Earn
            </Text>
              </View>
            </View>
            <View style={{flexDirection:'row',gap:10,marginHorizontal:8,paddingHorizontal:8,borderRadius:10,height:300,backgroundColor:'#F1F1F1',justifyContent:'space-between'}}>
              <View>
              <MaterialIcons name="install-mobile" size={24} color="black" />
              <Text style={{fontSize:12}}>
              EasyLoad
            </Text>
              </View>
              <View>
              <MaterialIcons name="money" size={24} color="black" />
              <Text style={{fontSize:12}}>
              Easycash Loan
            </Text>
              </View>
                 <View>
              <MaterialIcons name="savings" size={24} color="black" />
              <Text style={{fontSize:12}}>
              Saving Pockets
            </Text>
              </View>
              <View>
              <MaterialIcons name="insert-invitation" size={24} color="black" />
              <Text style={{fontSize:12}}>
              Invite & Earn
            </Text>
              </View>
            </View>
        </View>
            </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: "center",
    fontWeight: "600",
    color: "white",
    fontSize: 20,
    letterSpacing: 1,
  },
  header: {
    backgroundColor: "#249A54",
    height: 50,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 14,
    paddingHorizontal: 14,
  },
  icon: {
    fontWeight: "100",
  },
  hero: {
    backgroundColor: "#29B55F",
    height: 170,
  },
  heroInside: {
    backgroundColor: "#fff",
    borderRadius: 12,
    height: 150,
    margin: 10,
    justifyContent: "space-between",
    marginHorizontal: 10,
    flexDirection: "row",

  },
  heroImg: {
    width: 120,
    height: 50,
    marginHorizontal: 10,
    marginTop:8
  },
  heroRewards: {
    flexDirection: "row",
    margin: 22,
  },
  heroRewardsText: {
    fontWeight: "400",
  },
  rewards:{
  },
  mainBtn:{
    marginVertical:5,
    gap:6,
  },
  bgBtn:{
    backgroundColor:'#29B55F',
    borderRadius:12,
    padding:5,
    width:125, 
  },
  outlineBtn:{
    borderWidth:1,
    borderColor:'#29B55F',
    borderRadius:12,
    padding:5,
    width:125,
  },
  cards:{
    flexDirection:'row',
    marginTop:20,
    justifyContent:'space-between'
  },
  designCard:{
    backgroundColor:'#F1F1F1',
    height:90,
    width:100,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:4
  }
});
