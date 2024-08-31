// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf76ro8F2UaeHN9NH6QP4BTXyCd0z_oWg",
  authDomain: "portfolio-6a1f3.firebaseapp.com",
  projectId: "portfolio-6a1f3",
  storageBucket: "portfolio-6a1f3.appspot.com",
  messagingSenderId: "603862370451",
  appId: "1:603862370451:web:0652313023c713479da566",
  measurementId: "G-VR3TWBJ9SP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);