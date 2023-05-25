import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";

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
