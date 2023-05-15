import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const PostScreen = () => {
  return (
    <View style={styles.conteiner}>
      <Text>This is Posts screen!</Text>
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
