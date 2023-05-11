import React from "react";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen.js";
import { LoginScreen } from "./src/Screens/LoginScreen.js";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ImageBackground
        style={styles.image}
        source={require("./src/images/Photo-BG.jpeg")}
      >
       
      </ImageBackground> */}
      {/* <LoginScreen /> */}
      <RegistrationScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 0,
  },
  // image: {
  //   alignItems: "center",
  //   justifyContent: "center",
  //   marginBottom: 0,
  // },
});
