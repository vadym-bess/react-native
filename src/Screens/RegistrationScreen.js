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
} from "react-native";
import { useFonts } from "expo-font";

const initialState = {
  name: "",
  email: "",
  password: "",
};

export const RegistrationScreen = () => {
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const onLogin = () => {
    Alert.alert("Welcome!");
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
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.registrationThumb}>
          <View
            style={{
              ...styles.innerThumb,
              marginBottom: isShownKeyboard ? -160 : 0,
            }}
          >
            <View style={styles.avatarThumb}>
              <Image style={styles.userAvatar}></Image>
              <View style={styles.userAvatarButton} />
            </View>
            <View>
              <Text style={styles.registrationTitle}>Регистрация</Text>
              <View>
                <TextInput
                  onFocus={() => setIsShownKeyboard(true)}
                  style={styles.inputZone}
                  editable
                  maxLength={40}
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
                  maxLength={40}
                  keyboardType="email-address"
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                  placeholder="Адрес элекронной почты"
                ></TextInput>
              </View>

              <View>
                <TextInput
                  onFocus={() => setIsShownKeyboard(true)}
                  style={styles.inputZone}
                  editable
                  maxLength={40}
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                  placeholder="Пароль"
                  secureTextEntry="true"
                ></TextInput>
              </View>
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.button}
              onPress={keyboardHide}
              onPressIn={onLogin}
            >
              <Text style={styles.buttonText}>Зарегистрироваться</Text>
            </TouchableOpacity>

            <View style={styles.registrationButtonThumb}>
              <Button
                style={styles.alreadyRegisteredText}
                title="Уже зарегестрированы? Войти"
                accessibilityLabel="Уже зарегестрированы? Войти"
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
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
    height: 549,
    textAlign: "center",
    backgroundColor: "#fff",
    alignItems: "center",
    marginBottom: 160,
  },
  registrationThumb: {
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    borderRadius: 40,
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
    marginTop: 92,
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
    marginTop: 43,
  },
  buttonText: {
    fontFamily: "RobotoRegular",
    textAlign: "center",
    fontWeight: 400,
    fontSize: 16,
    color: "#FFFFFF",
  },
  registrationButtonThumb: {
    marginBottom: 178,
  },
  alreadyRegisteredText: {
    fontFamily: "RobotoRegular",
    fontSize: 16,
    color: "#1B4371",
    marginTop: 178,
  },
});
