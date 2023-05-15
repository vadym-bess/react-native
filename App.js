import * as React from "react";
import { RegistrationScreen } from "./src/Screens/Auth/RegistrationScreen.js";
import { LoginScreen } from "./src/Screens/Auth/LoginScreen.js";
import { Home } from "./src/Screens/MainScreens/Home.js";
import { PostScreen } from "./src/Screens/MainScreens/PostScreen";
import { CreatePostsScreen } from "./src/Screens/MainScreens/CreatePostsScreen.js";
import { ProfileScreen } from "./src/Screens/MainScreens/ProfileScreen.js";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SvgXml } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

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
  TouchableOpacity,
} from "react-native";

const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2H10" stroke="#BDBDBD" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 16L21 12L17 8" stroke="#BDBDBD" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 12H9" stroke="#BDBDBD" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const ArrowLeft = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 12H4" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 18L4 12L10 6" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
        <MainStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
      </MainStack.Navigator>
    );
  }
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          title: "Публикации",
          headerRight: () => (
            <NavigationContainer independent={true}>
              <TouchableOpacity>
                <View style={{ marginRight: 21 }}>
                  <SvgXml xml={svgString} width={25} height={25} />
                </View>
              </TouchableOpacity>
            </NavigationContainer>
          ),
          headerStyle: {
            backgroundColor: "#f08080",
          },
        }}
        name="Публикации"
        component={PostScreen}
      />
      <Tab.Screen
        options={{
          headerLeft: () => (
            <NavigationContainer independent={true}>
              <TouchableOpacity>
                <View style={{ marginLeft: 21 }}>
                  <SvgXml xml={ArrowLeft} width={25} height={25} />
                </View>
              </TouchableOpacity>
            </NavigationContainer>
          ),
          headerStyle: {
            backgroundColor: "#f08080",
          },
        }}
        name="+"
        component={CreatePostsScreen}
      />
      <Tab.Screen
        options={{
          headerLeft: () => (
            <NavigationContainer independent={true}>
              <TouchableOpacity>
                <View style={{ marginLeft: 21 }}>
                  <SvgXml xml={ArrowLeft} width={25} height={25} />
                </View>
              </TouchableOpacity>
            </NavigationContainer>
          ),
          headerStyle: {
            backgroundColor: "#f08080",
          },
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
  });
  const routing = useRoute({});

  if (!fontsLoaded) {
    return null;
  }
  return <NavigationContainer>{routing}</NavigationContainer>;
}
