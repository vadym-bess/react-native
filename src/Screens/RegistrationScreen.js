import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
  ImageBackground,
} from "react-native";
import { useFonts } from "expo-font";
import { SvgXml } from "react-native-svg";
import ImagePicker from "react-native-image-picker";

const uploadIcon = `
  <svg width="25" height="25" viewBox="0 0 25 25" fill="orange"  xmlns="http://www.w3.org/2000/svg">
<circle cx="12.5" cy="12.5" r="12" fill="white" stroke="orange"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z" fill="orange"/>
</svg>
`;

const initialState = {
  name: "",
  email: "",
  password: "",
};

export const RegistrationScreen = () => {
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  // const [avatar, setAvatar] = useState(null);

  // const pickImage = () => {
  //   ImagePicker.showImagePicker(
  //     { title: "Select Avatar", maxWidth: 300, maxHeight: 300 },
  //     (response) => {
  //       if (response.didCancel) {
  //         console.log("User cancelled image picker");
  //       } else if (response.error) {
  //         console.log("ImagePicker Error: ", response.error);
  //       } else {
  //         const source = { uri: response.uri };
  //         setAvatar(source);
  //       }
  //     }
  //   );
  // };

  const onLogin = () => {
    state.length > 1
      ? Alert.alert("Добро пожаловать!")
      : Alert.alert("Введите ваши данные!");
  };

  const [fontsLoaded] = useFonts({
    RobotoRegular: require("../../assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const keyboardHide = () => {
    setIsShownKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={{
            ...styles.image,
            marginBottom: isShownKeyboard ? 80 : 0,
          }}
          source={require("../../src/images/Photo-BG.jpeg")}
        >
          <View style={styles.registrationThumb}>
            <View style={styles.innerThumb}>
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
              >
                <View style={styles.avatarThumb}>
                  <Image
                    // source={require("../images/user.jpeg")}
                    style={styles.userAvatar}
                  ></Image>
                  <TouchableOpacity>
                    <View style={styles.userAvatarButton}>
                      <SvgXml
                        xml={uploadIcon}
                        width={25}
                        height={25}
                        // transform="rotate(45)"
                        // viewBox="-12 5 25 25"
                      />
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.innerFormThumb}>
                  <Text style={styles.registrationTitle}>Регистрация</Text>
                  <View>
                    <TextInput
                      onFocus={() => setIsShownKeyboard(true)}
                      style={[
                        styles.inputZone,
                        { borderColor: isFocused ? "#FF6C00" : "#E8E8E8" },
                      ]}
                      onChange={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      editable
                      maxLength={30}
                      textAlign={"left"}
                      value={state.name}
                      onChangeText={(value) =>
                        setState((prevState) => ({ ...prevState, name: value }))
                      }
                      placeholder="Логин"
                    ></TextInput>
                  </View>
                  <View>
                    <TextInput
                      onFocus={() => setIsShownKeyboard(true)}
                      style={styles.inputZone}
                      editable
                      maxLength={30}
                      keyboardType="email-address"
                      value={state.email}
                      onChangeText={(value) =>
                        setState((prevState) => ({
                          ...prevState,
                          email: value,
                        }))
                      }
                      placeholder="Адрес элекронной почты"
                    ></TextInput>
                  </View>

                  <View>
                    <TextInput
                      onFocus={() => setIsShownKeyboard(true)}
                      style={styles.inputZone}
                      editable
                      maxLength={24}
                      value={state.password}
                      onChangeText={(value) =>
                        setState((prevState) => ({
                          ...prevState,
                          password: value,
                        }))
                      }
                      placeholder="Пароль"
                      secureTextEntry={!showPassword}
                    ></TextInput>
                    <View>
                      <TouchableOpacity onPress={toggleShowPassword}>
                        <Text style={styles.showPasswordButton}>
                          {showPassword ? "Скрыть" : "Показать"}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.button}
                    onPress={keyboardHide}
                    onPressIn={onLogin}
                  >
                    <Text onPress={keyboardHide} style={styles.buttonText}>
                      Зарегистрироваться
                    </Text>
                  </TouchableOpacity>

                  <View style={styles.registrationButtonThumb}>
                    <Button
                      style={styles.alreadyRegisteredText}
                      title="Уже зарегестрированы? Войти"
                      accessibilityLabel="Уже зарегестрированы? Войти"
                    />
                  </View>
                </View>
              </KeyboardAvoidingView>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  innerThumb: {
    color: "#000",
    fontSize: 20,
    fontFamily: "RobotoRegular",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    minHeight: 549,
    textAlign: "center",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  registrationThumb: {
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    borderRadius: 40,
  },
  innerFormThumb: {
    // backgroundColor: "pink",
    alignItems: "center",
  },
  inputZone: {
    gap: 20,
    padding: 10,
    backgroundColor: "#F6F6F6",
    marginHorizontal: 10,
    marginBottom: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    height: 50,
    width: 343,
    color: "#BDBDBD",
    fontSize: 16,
    fontFamily: "RobotoRegular",
  },
  registrationTitle: {
    textAlign: "center",
    fontSize: 30,
    fontFamily: "RobotoRegular",
    fontWeight: "bold",
    color: "#212121",
    marginBottom: 20,
    marginTop: 72,
    marginBottom: 30,
  },
  avatarThumb: {
    position: "absolute",
    top: -90,
    left: "33%",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderRadius: 20,
  },
  userAvatar: {
    borderRadius: 20,
    width: 120,
    height: 120,
  },
  userAvatarButton: {
    position: "absolute",
    width: 25,
    height: 25,
    borderRadius: "50%",
    top: -40,
    left: 107,
  },
  button: {
    backgroundColor: "#FF6C00",
    padding: 16,
    width: 343,
    height: "auto",
    borderRadius: 100,
    marginTop: 43,
    marginBottom: 16,
  },
  buttonText: {
    fontFamily: "RobotoRegular",
    textAlign: "center",
    fontWeight: 400,
    fontSize: 16,
    color: "#FFFFFF",
  },
  registrationButtonThumb: {
    marginBottom: 65,
  },
  alreadyRegisteredText: {
    fontFamily: "RobotoRegular",
    fontSize: 16,
    color: "#1B4371",
    marginTop: 16,
  },
  showPasswordButton: {
    position: "absolute",
    bottom: 31,
    left: 265,
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
