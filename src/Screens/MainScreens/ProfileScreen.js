import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.conteiner}>
      <TouchableOpacity onPress={() => navigation.navigate("MapScreen")}>
        <Text style={{ marginBottom: 50, fontSize: 30 }}>to map!</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{ marginBottom: 50, fontSize: 30 }}>to comments!</Text>
      </TouchableOpacity>
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
