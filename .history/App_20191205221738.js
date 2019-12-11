import React from "react";
import { View, Text } from "react-native";
import { createAppNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

const AppContainer = createAppContainer(AppNavigator);

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default createAppContainer(AppNavigator);
