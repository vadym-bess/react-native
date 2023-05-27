import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { selectStateChange } from "./redux/selectors";
import { auth } from "./firebase/config";

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const routing = useRoute(selectStateChange);

  return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
}
