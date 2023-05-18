import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput, View, FlatList, Image } from "react-native";

export const PostScreen = ({ route }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  return (
    <View style={styles.conteiner}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageThumb}>
            <Image style={styles.image} source={{ uri: item.photo }} />
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
    borderRadius: 10,
  },
  imageThumb: {
    height: 240,
    width: "100%",
    marginBottom: 80,
    alignItems: "center",
    justifyContent: "center",
  },
});
