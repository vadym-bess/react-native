CreatePostsScreen;
import React from "react";
import { Form } from "react-router-dom";
import { StyleSheet, Text, View } from "react-native";
export const CommentsScreen = () => {
  return (
    <View style={styles.conteiner}>
      <Text>This is CommentsScreen screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
