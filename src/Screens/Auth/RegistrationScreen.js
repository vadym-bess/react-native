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
import { SvgXml } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { uploadIcon } from "../../../utils/svgIcons/icons";
import { useDispatch } from "react-redux";
import { authSignUpUser } from "../../../redux/auth/authOperations";

const initialState = {
  name: "",
  email: "",
  password: "",
};

export const RegistrationScreen = () => {
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [isFocusedName, setIsFocusedName] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const keyboardHide = () => {
    setIsShownKeyboard(false);
    Keyboard.dismiss();
    dispatch(authSignUpUser(state));
    setState(initialState);
  };

  // const onlyKeyboardHide = () => {
  //   Keyboard.dismiss();
  // };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={{
            ...styles.image,
            marginBottom: isShownKeyboard ? 80 : 0,
          }}
          source={require("../../images/Photo-BG.jpeg")}
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
                        {
                          borderColor: isFocusedName ? "#FF6C00" : "#E8E8E8",
                        },
                      ]}
                      onChange={() => setIsFocusedName(true)}
                      onBlur={() => setIsFocusedName(false)}
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
                      placeholder="Логин"
                    ></TextInput>
                  </View>
                  <View>
                    <TextInput
                      onFocus={() => setIsShownKeyboard(true)}
                      style={[
                        styles.inputZone,
                        {
                          borderColor: isFocusedEmail ? "#FF6C00" : "#E8E8E8",
                        },
                      ]}
                      onChange={() => setIsFocusedEmail(true)}
                      onBlur={() => setIsFocusedEmail(false)}
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
                      style={[
                        styles.inputZone,
                        {
                          borderColor: isFocusedPassword
                            ? "#FF6C00"
                            : "#E8E8E8",
                        },
                      ]}
                      onChange={() => setIsFocusedPassword(true)}
                      onBlur={() => setIsFocusedPassword(false)}
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
                  >
                    <Text style={styles.buttonText}>Зарегистрироваться</Text>
                  </TouchableOpacity>

                  <View style={styles.registrationButtonThumb}>
                    <Button
                      onPress={() => navigation.navigate("Login")}
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
