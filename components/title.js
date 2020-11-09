import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Title() {
  return (
    <View style={styles.titleContainer}>
      <Ionicons
        name="ios-flame"
        size={20}
        color="#fff"
        style={styles.iconTitle}
      />
      <Text style={styles.textTitle}>Flash Sale Hot</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    width: "40%",
    height: 30,
    marginTop: 8,
    marginLeft: 5,
    //padding: 5,
    borderRadius: 10,
    backgroundColor: "#DB7093",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  textTitle: {
    fontWeight: "bold",
    color: "#fff",
    //textAlign: "center",
    marginHorizontal: 8,
  },
  iconTitle: {
    marginLeft: 5,
  },
});
