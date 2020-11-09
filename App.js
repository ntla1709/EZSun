import * as React from "react";
import { Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "@expo/vector-icons/Ionicons";

import Hot from "./screens/hot";
import Shopee from "./screens/shopee";
import Lazada from "./screens/lazada";
import Tiki from "./screens/tiki";

import { Button } from "react-native-elements";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Hot") {
              return <Ionicons name="ios-flame" size={25} color={color} />;
            } else if (route.name === "Shopee") {
              return (
                <Image
                  source={require("./assets/shopee.png")}
                  style={{ height: 25, width: 25 }}
                />
              );
            } else if (route.name === "Lazada") {
              return (
                <Image
                  source={require("./assets/lazada.png")}
                  style={{ height: 25, width: 25 }}
                />
              );
            } else if (route.name === "Tiki") {
              return (
                <Image
                  source={require("./assets/tiki.png")}
                  style={{ height: 26, width: 26 }}
                />
              );
            }

            // You can return any component that you like here!
          },
        })}
        tabBarOptions={{
          activeTintColor: "#444",
          inactiveTintColor: "grey",
          activeBackgroundColor: "#DB7093",
          tabStyle: { borderRadius: 10 },
          //style: { backgroundColor: "#F52870" },
        }}
      >
        <Tab.Screen name="Hot" component={Hot} />
        <Tab.Screen name="Shopee" component={Shopee} />
        <Tab.Screen name="Lazada" component={Lazada} />
        <Tab.Screen name="Tiki" component={Tiki} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
