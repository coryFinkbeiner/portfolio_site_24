import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDf76ro8F2UaeHN9NH6QP4BTXyCd0z_oWg",
  authDomain: "portfolio-6a1f3.firebaseapp.com",
  projectId: "portfolio-6a1f3",
  storageBucket: "portfolio-6a1f3.appspot.com",
  messagingSenderId: "603862370451",
  appId: "1:603862370451:web:0652313023c713479da566",
  measurementId: "G-VR3TWBJ9SP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { storage };

