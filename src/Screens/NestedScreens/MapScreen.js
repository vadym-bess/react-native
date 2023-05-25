import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View } from "react-native";

export const MapScreen = () => {
  return (
    <View style={styles.conteiner}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: "",
          longitude: "",
          latitudeDelta: "0.1",
          longitudeDelta: "0.006",
        }}
      ></MapView>
      <Marker
        coordinate={{
          latitude: "",
          longitude: "",
          latitudeDelta: "0.1",
          longitudeDelta: "0.006",
        }}
        title="travel photo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: "center",
  },
  map: {
    flex: 1,
  },
});
