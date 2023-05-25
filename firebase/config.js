import {
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBeqlyFZvNXE98KyvsZ8ogJB94EV54YV_c",
  authDomain: "rn-social-394a7.firebaseapp.com",
  projectId: "rn-social-394a7",
  storageBucket: "rn-social-394a7.appspot.com",
  messagingSenderId: "591626397292",
  appId: "1:591626397292:web:3b2e21d2eee6db21289a49",
  measurementId: "G-4VDNS3LF9H",
};

export const auth = initializeAuth(firebaseConfig, {
  persistence: getReactNativePersistence(AsyncStorage),
});
