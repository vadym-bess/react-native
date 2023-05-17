import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const routing = useRoute(true);

  return <NavigationContainer>{routing}</NavigationContainer>;
}
