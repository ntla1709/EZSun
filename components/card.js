import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import * as Progress from "react-native-progress";
import Label from "./label";

export default function Card() {
  const sum = 20;
  const sell = 10;
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <ImageBackground
          source={require("../assets/item1.png")}
          resizeMode="contain"
          style={styles.itemImage}
        >
          <View style={{ position: "absolute", top: 3 }}>
            <Label />
          </View>
        </ImageBackground>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          Serum siêu cấp ẩm sáng da L'Oreal Paris pure Hyaluronic Acid 1.5% 30ml
        </Text>
        <Text style={styles.price}>đ 429.000</Text>
        <View style={styles.progressBar}>
          <Progress.Bar
            height={15}
            borderRadius={10}
            borderWidth={1}
            color="#DB7093"
            borderColor="#DB7093"
            progress={sell / sum}
            width={Dimensions.get("window").width * 0.4}
          >
            <Text style={styles.textProgressBar}>Đã bán {sell}</Text>
          </Progress.Bar>
        </View>
      </View>

      <View style={styles.itemContainer}>
        <View style={styles.labelView}></View>
        <ImageBackground
          source={require("../assets/item2.png")}
          resizeMode="contain"
          style={styles.itemImage}
        >
          <View style={{ position: "absolute", top: 3 }}>
            <Label />
          </View>
        </ImageBackground>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          Bộ sản phẩm chăm sóc dưỡng ẩm da innisfree Hydration Skin Care Set
          with Green Tea
        </Text>
        <Text style={styles.price}>đ 379.000</Text>
        <View style={styles.progressBar}>
          <Progress.Bar
            height={15}
            borderRadius={10}
            borderWidth={1}
            color="#DB7093"
            borderColor="#DB7093"
            progress={sell / sum}
            width={Dimensions.get("window").width * 0.4}
          >
            <Text style={styles.textProgressBar}>Đã bán {sell}</Text>
          </Progress.Bar>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    paddingHorizontal: "auto",
    height: Dimensions.get("window").height * 0.35,
  },
  itemContainer: {
    width: "50%",
    height: "80%",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 8,
    padding: 5,
  },

  itemImage: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 9,
    position: "relative",
  },
  title: {
    marginTop: 5,
    fontSize: 10,
    height: 24,
    overflow: "visible",
  },
  price: {
    //textAlign: "center",
    marginVertical: 5,
    fontWeight: "bold",
    fontSize: 10,
  },
  progressBar: {
    alignItems: "center",
  },
  textProgressBar: {
    alignSelf: "center",
    color: "#444",
    position: "absolute",
    top: 0.5,
    fontSize: 10,
    fontWeight: "bold",
  },
});
