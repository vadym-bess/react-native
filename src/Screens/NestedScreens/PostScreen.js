import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

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
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageThumb}>
            <Image style={styles.image} source={{ uri: item.photo }} />
          </View>
        )}
      />

      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("MapScreen")}>
          <Text style={{ marginBottom: 10, fontSize: 30 }}>to map!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CommentsScreen")}>
          <Text style={{ marginBottom: 10, fontSize: 30 }}>to comments!</Text>
        </TouchableOpacity>
      </View>
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

    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    color: "#000",
  },
});
