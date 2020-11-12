import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import { Button, Header, SearchBar } from "react-native-elements";
import { Icon } from "react-native-elements";
import Ionicons from "@expo/vector-icons/Ionicons";

import Head from "../shared/head";
import Swiper from "react-native-swiper";
import Card from "../components/card";

import Title from "../components/title";
export default function Hot() {
  return (
    <View>
      <Head />
      <View style={{ paddingBottom: 160 }}>
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
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sliderContainer: {
    height: Dimensions.get("window").height * 0.2,
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
