import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-juNLp7IasipvQF4RFXRZ49pedHDVV5I",
  authDomain: "travelrealwebproject.firebaseapp.com",
  projectId: "travelrealwebproject",
  storageBucket: "travelrealwebproject.appspot.com",
  messagingSenderId: "469144741764",
  appId: "1:469144741764:web:1e9f181b38cefa5de81fd1",
  measurementId: "G-0WWT660NV0",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
