import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const MapScreen = () => {
  return (
    <View style={styles.conteiner}>
      <Text>This is Map screen!</Text>
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
