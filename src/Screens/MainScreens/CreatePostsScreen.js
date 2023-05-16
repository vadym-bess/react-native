import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const CreatePostsScreen = () => {
  return (
    <View style={styles.conteiner}>
      <Text>This is CreatePostsScreen screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
