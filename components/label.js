import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Label() {
  const label = "Shopee";
  // const classLabel = (label) => {
  //    if(label === "Shopee") {
  //        return "styles.shopeeLabel";
  //    }
  //    else if(label === "Lazada") {
  //     return "styles.lazadaLabel";
  // }
  // else if(label === "Tiki") {
  //     return "styles.tikiLabel";
  // }
  // }

  return (
    <View style={styles.shopeeLabel}>
      <Text style={styles.textLabel}>Shopee</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  shopeeLabel: {
    width: 50,
    height: 25,
    borderRadius: 8,
    backgroundColor: "#f53d2d",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  textLabel: {
    textAlign: "center",
    fontSize: 10,
    color: "#fff",
  },
});
