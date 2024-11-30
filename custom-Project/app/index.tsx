import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
export default function HomeScreen() {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Welcome To Our Screen</Text>
      <TouchableOpacity
        onPress={() => router.push("/login")}
        style={styles.button}
      >
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: "#002F2F",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 13,
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  button: {
    backgroundColor: "#FF5722",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    width: 160,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
