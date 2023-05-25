import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PostScreen } from "../NestedScreens/PostScreen";
import { MapScreen } from "../NestedScreens/MapScreen";
import { CommentsScreen } from "../NestedScreens/CommentsScreen";
import { ArrowLeft } from "../../../utils/svgIcons/icons";
import { NavigationContainer } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const NestedScreen = createStackNavigator();

export const Home = ({ route, navigation }) => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="PostScreen"
        component={PostScreen}
        options={{
          headerShown: false,
        }}
      />
      <NestedScreen.Screen
        name="MapScreen"
        component={MapScreen}
        options={{ headerShown: false }}
      />
      <NestedScreen.Screen
        name="CommentsScreen"
        title="Коментарии"
        component={CommentsScreen}
        options={{
          headerShown: false,
          headerStyle: {
            height: 90,
            borderBottomWidth: 1,
            borderBottomColor: "#E8E8E8",
          },
          headerLeft: () => (
            <NavigationContainer independent={true}>
              <TouchableOpacity
                onPress={() => navigation.navigate("PostsScreen")}
              >
                <View style={{ marginLeft: 21 }}>
                  <SvgXml xml={ArrowLeft} width={25} height={25} />
                </View>
              </TouchableOpacity>
            </NavigationContainer>
          ),
        }}
      />
    </NestedScreen.Navigator>
  );
};
