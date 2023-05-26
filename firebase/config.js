import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeqlyFZvNXE98KyvsZ8ogJB94EV54YV_c",
  authDomain: "rn-social-394a7.firebaseapp.com",
  projectId: "rn-social-394a7",
  storageBucket: "rn-social-394a7.appspot.com",
  messagingSenderId: "591626397292",
  appId: "1:591626397292:web:3b2e21d2eee6db21289a49",
  measurementId: "G-4VDNS3LF9H",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
export const storage = getStorage();
export const db = getFirestore(app);
