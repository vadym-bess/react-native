import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
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

const initialState = {
  name: "",
  email: "",
  password: "",
};

export const LoginScreen = () => {
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [isFocused, setIsFocused] = useState(false);

  const onLogin = () => {
    Alert.alert("Welcome!", `${state.name}`);
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
            marginBottom: isShownKeyboard ? 20 : 0,
          }}
          source={require("../../src/images/Photo-BG.jpeg")}
        >
          <View style={styles.registrationThumb}>
            <View style={styles.innerThumb}>
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
              >
                <View style={styles.innerFormThumb}>
                  <Text style={styles.registrationTitle}>Войти</Text>
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
                      maxLength={40}
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
                      style={
                        styles.inputZone
                        // { borderColor: isFocused ? "#FF6C00" : "#E8E8E8" },
                      }
                      // onChange={() => setIsFocused(true)}
                      // onBlur={() => setIsFocused(false)}
                      editable
                      maxLength={40}
                      value={state.password}
                      onChangeText={(value) =>
                        setState((prevState) => ({
                          ...prevState,
                          password: value,
                        }))
                      }
                      placeholder="Пароль"
                      secureTextEntry="true"
                    ></TextInput>
                  </View>
                </View>
              </KeyboardAvoidingView>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={keyboardHide}
                onPressIn={onLogin}
              >
                <Text style={styles.buttonText}>Войти</Text>
              </TouchableOpacity>

              <View style={styles.registrationButtonThumb}>
                <Button
                  style={styles.alreadyRegisteredText}
                  title="Нет аккаунта? Зарегистрироваться"
                  accessibilityLabel="Нет аккаунта? Зарегистрироваться"
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 0,
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 0,
  },
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
    height: "auto",
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
    borderColor: "#FF6C00",
    height: 50,
    width: 343,
    color: "#BDBDBD",
    fontSize: 16,
    fontFamily: "RobotoRegular",
    justifyContent: "space-between",
  },
  showPasswordText: {
    position: "absolute",
    left: 50,
  },

  registrationTitle: {
    textAlign: "center",
    fontSize: 30,
    fontFamily: "RobotoRegular",
    fontWeight: "bold",
    color: "#212121",
    marginBottom: 20,
    marginTop: 0,
  },
  avatarThumb: {
    position: "absolute",
    top: -60,
    left: "42%",
    width: 120,
    height: 120,
    borderRadius: 10,
    backgroundColor: "#F6F6F6",
  },
  userAvatar: {
    width: 120,
    height: 120,
  },
  userAvatarButton: {
    position: "absolute",
    width: 25,
    height: 25,
    borderRadius: "50%",
    borderColor: "#FF6C00",
    borderWidth: 1,
    top: 80,
    left: 107,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#FF6C00",
    padding: 16,
    width: 343,
    height: "auto",
    borderRadius: 100,
    marginTop: 30,
  },
  buttonText: {
    fontFamily: "RobotoRegular",
    textAlign: "center",
    fontWeight: 400,
    fontSize: 16,
    color: "#FFFFFF",
  },
  registrationButtonThumb: {},
  alreadyRegisteredText: {
    fontFamily: "RobotoRegular",
    fontSize: 16,
    color: "#1B4371",
  },
});
