import React from "react";
import { View, Text } from "react-native";
import { createAppNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
};
