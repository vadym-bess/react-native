import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { SvgXml } from "react-native-svg";
import * as Location from "expo-location";
import { locationIcon, postsIcon } from "../../../utils/svgIcons/icons";

export const PostScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log("Posts--->", posts);
  return (
    <View style={styles.container}>
      <View style={styles.userAvatarThumb}>
        <Image
          source={require("../../images/user.jpeg")}
          style={styles.userAvatar}
        ></Image>
        <View style={styles.userNameThumb}>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>nataliRomanova@gmail.com</Text>
        </View>
      </View>

      <FlatList
        style={styles.flatListThumb}
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <>
            <View style={styles.imageThumb}>
              <Image style={styles.image} source={{ uri: item.photo }} />
            </View>
            <View>
              <Text style={styles.photoTitle}>{item.state.name}</Text>

              <View style={styles.locationFlexedThumb}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("CommentsScreen")}
                  style={styles.postsIcon}
                >
                  <SvgXml
                    xml={postsIcon}
                    width={25}
                    height={25}
                    borderRadius={50}
                  />
                  <Text style={styles.postsCount}>0</Text>
                </TouchableOpacity>
                <View style={styles.locationIcon}>
                  <SvgXml
                    xml={locationIcon}
                    width={25}
                    height={25}
                    borderRadius={50}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("MapScreen")}
                >
                  <Text style={styles.photoLocationName}>
                    {item.state.location}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    paddingBottom: 32,
    height: "100%",
  },
  image: {
    height: 240,
    width: "100%",
    borderRadius: 10,
  },
  imageThumb: {
    height: 240,
    width: "100%",
    marginBottom: 8,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    color: "#000",
  },
  photoTitle: {
    fontFamily: "RobotoRegular",
    fontWeight: 400,
    fontSize: 16,
    alignSelf: "flex-start",
    color: "#000",
  },
  photoLocationName: {
    fontFamily: "RobotoRegular",
    fontWeight: 400,
    fontSize: 16,
    color: "#000",
    alignSelf: "flex-end",
    textDecorationLine: "underline",
  },
  locationFlexedThumb: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 11,
    marginBottom: 20,
  },
  locationIcon: {
    marginRight: 9,
  },
  postsIcon: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  postsCount: {
    color: "#BDBDBD",
  },
  userAvatarThumb: {
    // flex: 1,
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "flex-start",
    // marginBottom: 42,
    // marginTop: 22,
    width: "auto",
    height: 60,
    flex: 0,
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  userAvatar: {
    borderRadius: 10,
    width: 60,
    height: 60,
  },
  userNameThumb: {},
  userName: {
    fontFamily: "RobotoRegular",
    fontWeight: "900",
    fontSize: 13,
  },
  userEmail: {
    fontFamily: "RobotoRegular",
    fontWeight: 400,
    fontSize: 11,
  },
  flatListThumb: {
    marginTop: 30,
  },
});
