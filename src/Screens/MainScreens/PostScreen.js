import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";

export const PostScreen = ({ route }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log(posts);
  return (
    <View style={styles.conteiner}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageThumb}>
            <Image source={{ uri: item.photo }} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    paddingBottom: 32,
    height: "auto",
  },
  image: {
    height: 240,
    width: "100%",
    borderWidth: 1,
  },
  imageThumb: {
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
