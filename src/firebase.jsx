import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpYA8PPTfW-YvrWTqbWpbLJWhsLcO2EpY",
  authDomain: "new-treavereal-project.firebaseapp.com",
  projectId: "new-treavereal-project",
  storageBucket: "new-treavereal-project.appspot.com",
  messagingSenderId: "578369314258",
  appId: "1:578369314258:web:a796fafaca4d72f4be3c0b",
  measurementId: "G-0BE0LWG47G",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
