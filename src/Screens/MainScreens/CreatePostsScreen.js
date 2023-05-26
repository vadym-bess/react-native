import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";
import { Camera } from "expo-camera";
import { SvgXml } from "react-native-svg";
import * as Location from "expo-location";

import { makePhotoIcon } from "../../../utils/svgIcons/icons";
import { locationIcon } from "../../../utils/svgIcons/icons";
import { deleteIcon } from "../../../utils/svgIcons/icons";
import { MapScreen } from "../NestedScreens/MapScreen";

const initialState = {
  name: "",
  location: "",
};

export const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [location, setLocation] = useState(null);

  const keyboardHide = () => {
    setIsShownKeyboard(false);
    Keyboard.dismiss();
    setState(initialState);
  };

  const resetData = () => {
    setPhoto(null);
    setState(initialState);
  };

  const cleanKeyBoardHide = () => {
    setIsShownKeyboard(false);
    Keyboard.dismiss();
  };

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    const location = await Location.getCurrentPositionAsync();
    console.log("location-->", location);
    setPhoto(photo.uri);
    setLocation(location.coords);
  };

  const sendPhoto = () => {
    navigation.navigate("PostScreen", { photo, state, location });
  };

  return (
    <TouchableWithoutFeedback onPress={cleanKeyBoardHide}>
      <View style={styles.container}>
        <Camera style={styles.camera} ref={setCamera}>
          {photo && (
            <View style={styles.takePhotoContainer}>
              <Image
                source={{ uri: photo }}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: 140,
                  borderRadius: 5,
                }}
              />
            </View>
          )}
          <TouchableOpacity style={styles.button} onPress={takePhoto}>
            <View style={styles.cameraButton}>
              <SvgXml
                xml={makePhotoIcon}
                width={25}
                height={25}
                borderRadius={50}
              />
            </View>
          </TouchableOpacity>
        </Camera>
        <Text
          style={{
            ...styles.uploadText,
            marginBottom: isShownKeyboard ? 20 : 48,
          }}
        >
          Загрузите фото{" "}
        </Text>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingView}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.inputTop}>
            <TextInput
              onFocus={() => setIsShownKeyboard(true)}
              style={styles.textInputTop}
              placeholder="Название..."
              editable
              maxLength={30}
              textAlign={"left"}
              value={state.name}
              onChangeText={(value) =>
                setState((prevState) => ({
                  ...prevState,
                  name: value,
                }))
              }
            ></TextInput>
          </View>
          <View style={styles.inputBottom}>
            <View style={styles.locationIcon}>
              <SvgXml
                xml={locationIcon}
                width={25}
                height={25}
                borderRadius={50}
              />
            </View>
            <TextInput
              onFocus={() => setIsShownKeyboard(true)}
              style={styles.textInputBottom}
              placeholder="Местность..."
              editable
              maxLength={30}
              textAlign={"left"}
              value={state.location}
              onChangeText={(value) =>
                setState((prevState) => ({
                  ...prevState,
                  location: value,
                }))
              }
            ></TextInput>
          </View>
        </KeyboardAvoidingView>
        <TouchableOpacity
          onPress={keyboardHide}
          onPressIn={sendPhoto}
          style={{
            ...styles.postButton,
            backgroundColor: photo ? "#FF6C00" : "#F6F6F6",
          }}
        >
          <Text
            style={{
              ...styles.postButtonText,
              color: photo ? "#fff" : "#BDBDBD",
            }}
          >
            Опубликовать
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={resetData}>
          <SvgXml
            xml={deleteIcon}
            width={70}
            height={40}
            borderRadius={50}
            marginTop={100}
          />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    paddingBottom: 32,
    height: "auto",
  },
  camera: {
    backgroundColor: "#E8E8E8",
    height: 240,
    width: "100%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  cameraButton: {
    display: "flex",
    height: 44,
    width: 44,
    backgroundColor: "#fff",
    borderRadius: 50,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  takePhotoContainer: {
    position: "absolute",
    left: 191,
    top: 150,
    width: "50%",
    height: 140,
    zIndex: 1,
    borderRadius: 5,
  },
  uploadText: {
    fontFamily: "RobotoRegular",
    fontWeight: 400,
    fontSize: 16,
    alignSelf: "flex-start",
    color: "#BDBDBD",
  },
  inputTop: {
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    width: "100%",
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 32,
  },
  inputBottom: {
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    width: "100%",
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 32,
  },
  textInputTop: {
    fontFamily: "RobotoRegular",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 18,
    alignSelf: "flex-start",
    color: "#212121",
    width: "100%",
  },
  textInputBottom: {
    fontFamily: "RobotoRegular",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 18,
    alignSelf: "flex-start",
    color: "#212121",
    marginLeft: 30,
    width: "100%",
  },
  locationIcon: {
    position: "absolute",
    top: 12,
  },
  keyboardAvoidingView: {
    width: "100%",
  },
  postButton: {
    padding: 16,
    width: 343,
    height: "auto",
    borderRadius: 100,
    alignItems: "center",
  },
  postButtonText: {
    fontFamily: "RobotoRegular",
    fontWeight: 400,
    fontSize: 16,
    color: "#BDBDBD",
  },
});
