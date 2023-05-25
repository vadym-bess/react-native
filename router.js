import * as React from "react";
import { RegistrationScreen } from "./src/Screens/Auth/RegistrationScreen.js";
import { LoginScreen } from "./src/Screens/Auth/LoginScreen.js";
import { Home } from "./src/Screens/MainScreens/Home.js";
import { CreatePostsScreen } from "./src/Screens/MainScreens/CreatePostsScreen.js";
import { ProfileScreen } from "./src/Screens/MainScreens/ProfileScreen.js";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SvgXml } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";
import { svgString, ArrowLeft } from "./utils/svgIcons/icons.js";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { View, TouchableOpacity, StyleSheet, Screen } from "react-native";

const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
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
    <Tab.Navigator
      tabBarOptions={{ showLabel: false }}
      style={styles.tabBarStyles}
    >
      <Tab.Screen
        options={{
          tabBarItemStyle: {
            marginTop: 10,
          },
          title: "Публикации",
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="appstore-o" size={24} color={color} />
          ),
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
            // backgroundColor: "#f08080",
            borderBottomWidth: 1,
            borderBottomColor: "#E8E8E8",
          },
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        style={styles.plusButton}
        options={{
          tabBarItemStyle: {
            backgroundColor: "#FF6C00",
            marginTop: 9,
            borderRadius: 20,
            color: "#fff",
          },
          tabBarIcon: ({ focused, size, color, width }) => (
            <AntDesign name="plus" size={25} color={"#fff"} width={25} />
          ),
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
            // backgroundColor: "#f08080",
            borderBottomWidth: 1,
            borderBottomColor: "#E8E8E8",
          },
        }}
        name="Создать публикацию"
        component={CreatePostsScreen}
      />
      <Tab.Screen
        options={{
          tabBarItemStyle: {
            marginTop: 10,
          },
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
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
            // backgroundColor: "#f08080",
            borderBottomWidth: 1,
            borderColor: "#E8E8E8",
          },
        }}
        name="Профиль"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  plusButton: {
    width: 40,
    height: 40,
  },
});
