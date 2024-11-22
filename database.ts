// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import AsyncStorage, { AsyncStorageStatic } from "@react-native-async-storage/async-storage";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC7xPjzUqvH9Z1suaoTx0o9SMveP54MtUk",
  authDomain: "math-magicians-90f93.firebaseapp.com",
  projectId: "math-magicians-90f93",
  storageBucket: "math-magicians-90f93.firebasestorage.app",
  messagingSenderId: "568919705344",
  appId: "1:568919705344:web:584fd730f1b811fd6455e5"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestoredb = getFirestore(app);




