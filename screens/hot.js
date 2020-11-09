import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { Button, Header, SearchBar } from "react-native-elements";
import { Icon } from "react-native-elements";
import Ionicons from "@expo/vector-icons/Ionicons";

import Head from "../shared/head";
import Banner from "../components/banner";
import Swiper from "react-native-swiper";
import Card from "../components/card";

import Title from "../components/title";
export default function Hot() {
  return (
    <View>
      <Head />
      <ScrollView>
        <View style={styles.sliderContainer}>
          <Swiper autoplay height={"100%"} activeDotColor="#F52870">
            <View style={styles.slide}>
              <Image
                source={require("../assets/banner-shopee.jpg")}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require("../assets/banner-lazada.jpg")}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require("../assets/banner-tiki.png")}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
          </Swiper>
        </View>
        <Title />

        <Card />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: "20%",
    width: "95%",
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 8,
  },
  sliderImage: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
  },
});
