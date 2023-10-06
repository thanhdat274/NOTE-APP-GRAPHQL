// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiiYfLLXWU4F-TcDyTAo77E8xLQNWsozA",
  authDomain: "note-app-972eb.firebaseapp.com",
  projectId: "note-app-972eb",
  storageBucket: "note-app-972eb.appspot.com",
  messagingSenderId: "589428728853",
  appId: "1:589428728853:web:0ad72682063e44685a5a1c",
  measurementId: "G-57GD4S2FSX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);