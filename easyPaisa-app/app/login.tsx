import { router } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const login = () => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.header}>
        <Text style={styles.text}>Your Account Is Login.</Text>
        <TouchableOpacity
          onPress={() => router.push("/easyPaisa")}
          style={styles.btn}
        >
          Go To Home
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#9B00F0",
    borderRadius: 12,
    padding: 10,
    textAlign: "center",
    color: "#fff",
    width: 200,
    fontFamily: "arial",
  },
  text: {
    fontFamily: "arial",
    textAlign:'center',
    fontSize:25,
    fontWeight:"bold",
    marginVertical:10
  },
});

export default login;
