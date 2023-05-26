import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Dimensions } from "react-native";
import * as Location from "expo-location";

export const MapScreen = ({ location }) => {
  // const [location, setLocation] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestPermissionsAsync();
  //     if (status !== "granted") {
  //       console.log("Permission to access location was denied");
  //     }
  //     const coords = {
  //       latitude: location.coords.latitude,
  //       longitude: location.coords.longitude,
  //     };
  //     setLocation(coords);
  //   })();
  // }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          longitude: 31.886468742271294,
          latitude: 51.04414463216664,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation={true}
      >
        {/* {location && ( */}
        <Marker
          pinColor="red"
          title="I am here"
          coordinate={{
            longitude: 31.886468742271294,
            latitude: 51.04414463216664,
          }}
          description="Hello"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
