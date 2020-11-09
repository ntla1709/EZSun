import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button, Header, SearchBar } from "react-native-elements";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Head() {
  const [search, setSearch] = useState("");
  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <Header
      placement="right"
      leftContainerStyle={{ flex: 5 }}
      centerContainerStyle={{ flex: 1 }}
      rightContainerStyle={{ flex: 1 }}
      backgroundColor="#DB7093"
      leftComponent={
        <SearchBar
          placeholder="Search"
          round
          searchIcon={{ size: 25 }}
          onChangeText={updateSearch}
          value={search}
          lightTheme="true"
          inputContainerStyle={{
            width: "100%",
            height: "100%",
            backgroundColor: "#fff",
          }}
          containerStyle={{
            backgroundColor: "tranparent",
            borderBottomWidth: 0,
            borderTopWidth: 0,
          }}
        />
      }
      // centerComponent={}
      rightComponent={
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            name="ios-notifications-outline"
            style={styles.icon}
            size={28}
          />
          <Ionicons name="ios-menu" style={styles.icon} size={28} />
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    margin: 10,
    color: "#444",
  },
});
