import React from "react";
import { View, Text } from "react-native";
import { createAppNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
};

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default () => <AppContainer />;
