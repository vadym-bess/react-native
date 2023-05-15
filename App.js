import React from "react";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen.js";
import { LoginScreen } from "./src/Screens/LoginScreen.js";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
