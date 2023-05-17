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
  Button,
} from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";
import { Camera, CameraType } from "expo-camera";
import { SvgXml } from "react-native-svg";
import * as Location from "expo-location";

import { makePhotoIcon } from "../../../utils/svgIcons/icons";
import { locationIcon } from "../../../utils/svgIcons/icons";

const initialState = {
  name: "",
  location: "",
};

export const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [type, setType] = useState(CameraType.back);

  const keyboardHide = () => {
    setIsShownKeyboard(false);
    Keyboard.dismiss();
    setState(initialState);
  };

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    const location = await Location.getCurrentPositionAsync();
    console.log(location);
    setPhoto(photo.uri);
  };

  const sendPhoto = () => {
    navigation.navigate("PostScreen", { photo });
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <Camera style={styles.camera} ref={setCamera} type={type}>
          {photo && (
            <View style={styles.takePhotoContainer}>
              <Image
                source={{ uri: photo }}
                style={{ width: "100%", height: 240 }}
              />
            </View>
          )}
          <TouchableOpacity
            onPress={() => {
              takePhoto;
            }}
          >
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
          style={styles.postButton}
        >
          <Text style={styles.postButtonText} onPressIn={sendPhoto}>
            Опубликовать
          </Text>
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
    display: "flex",
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
    left: 50,
    top: 50,
    width: 343,
    height: 240,
    borderWidth: 1,
    zIndex: 1,
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
    fontWeight: 400,
    fontSize: 16,
    alignSelf: "flex-start",
    color: "#BDBDBD",
    width: "100%",
  },
  textInputBottom: {
    fontFamily: "RobotoRegular",
    fontWeight: 400,
    fontSize: 16,
    alignSelf: "flex-start",
    color: "#BDBDBD",
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
    backgroundColor: "#F6F6F6",
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
