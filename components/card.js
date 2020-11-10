import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimension,
  Dimensions,
} from "react-native";
import * as Progress from "react-native-progress";

export default function Card() {
  const sum = 20;
  const sell = 10;
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Image
          source={require("../assets/item1.png")}
          resizeMode="contain"
          style={styles.itemImage}
        />
        <Text style={styles.price}>429.000đ</Text>
        <Progress.Bar
          height={15}
          borderRadius={10}
          borderWidth={1}
          color="#DB7093"
          borderColor="#DB7093"
          progress={sell / sum}
          width={null}
        >
          <Text
            style={{
              alignSelf: "center",
              color: "#444",
              position: "absolute",
              top: 0.5,
              fontSize: 10,
              fontWeight: "bold",
            }}
          >
            Đã bán {sell}
          </Text>
        </Progress.Bar>
      </View>

      <View style={styles.itemContainer}>
        <Image
          source={require("../assets/item2.png")}
          resizeMode="contain"
          style={styles.itemImage}
        />
        <Text style={styles.price}>320.000đ</Text>
        <Progress.Bar
          height={15}
          borderRadius={10}
          borderWidth={1}
          color="#DB7093"
          borderColor="#DB7093"
          progress={sell / sum}
          width={null}
        >
          <Text
            style={{
              alignSelf: "center",
              color: "#444",
              position: "absolute",
              top: 0.5,
              fontSize: 10,
              fontWeight: "bold",
            }}
          >
            Đã bán {sell}
          </Text>
        </Progress.Bar>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    paddingHorizontal: "auto",
    height: Dimensions.get("window").height * 0.2,
  },
  itemContainer: {
    width: "50%",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 8,
    padding: 5,
    height: "90%",
    // borderColor: "#ddd",
    // borderWidth: 1,
  },
  price: {
    // textAlign: "center",
    alignItems: "center",
    marginVertical: 5,
    fontWeight: "bold",
    paddingLeft: "10%",
    fontSize: 10,
  },
  progressBar: {},
  itemImage: {
    height: "80%",
    alignSelf: "center",
    borderRadius: 15,
  },
});
